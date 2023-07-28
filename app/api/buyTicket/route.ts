import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import jsPDF from "jspdf";
import fs from "fs-extra";
import path from "path";
import autoTable from "jspdf-autotable";
import { sendVerificationEmail } from "@/lib/email";
export const POST = async (req: NextRequest) => {
  connectDB();

  const body = await req.json();
  const {
    userId,
    busId,
    seatNumber,
    boardingPlace,
    destination,
    date,
    email,
    id,
    name,
    busNumber,
  } = body;
  const bus = await Bus.findById(busId);
  const doc = new jsPDF();
  const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed
  const publicPath = path.join(process.cwd(), "public");
  console.log("BUS Number", busNumber);
  const pdfFolderPath = path.join(publicPath, "pdf");
  const filePath = path.join(pdfFolderPath, fileName);
  await fs.ensureDir(pdfFolderPath);
  try {
    console.log("BUS ID", busId);
    if (!bus) {
      throw new Error("Bus not found");
    }

    // Check if the seat is available
    if (bus.availableSeats <= 0) {
      throw new Error("No available seats");
    }

    // Check if the seat is already taken
    const isSeatTaken = bus.passengers.some(
      (passenger: {
        // seatNumber: any;
        seatNumber: number[];
        purchaseDate: Date;
        destination: string;
      }) =>
        passenger.seatNumber.includes(
          seatNumber.map((number: number) => number)
        ) &&
        passenger.purchaseDate.getTime() === new Date(date).getTime() &&
        passenger.destination === destination
    );

    if (isSeatTaken) {
      throw new Error("Seat is already taken");
    }

    // Check payment verification status

    // Add the ticket details to the bus
    bus.passengers.push({
      seatNumber: seatNumber,
      user: userId,
      boardingPlace,
      destination,
      purchaseDate: new Date(),
    });

    // Decrement the availableSeats count
    bus.availableSeats--;

    // Save the updated bus document
    await bus.save();

    const newTicketData = {
      seatNumber: seatNumber, // An array of seat numbers [1, 2, 3]
      user: userId,
      boardingPlace,
      destination,
      purchaseDate: new Date(),
      isPayment: false,
      date: date,
      busNumber: parseInt(busNumber),
    };

    // Convert seatNumber to an array of numbers and use the spread operator to clone newTicketData
    const newTicket = new Ticket(newTicketData);

    // Save the new ticket
    const ticket = await newTicket.save();
    if (!ticket) {
      return new NextResponse(
        JSON.stringify({ message: "something wrong! try again!" }),
        {
          status: 404,
        }
      );
    }
    doc.text("Ticket Information", 10, 10);
    autoTable(doc, {
      head: [["Ticket ID", "Buyer Name", "Price", "Date", "Destination"]],

      body: [
        [
          ticket._id,
          name,
          seatNumber.reduce(
            (total: number, number: number) => total + number,
            0
          ),
          date,
          destination,
        ],

        // ...
      ],
    });

    doc.save(filePath);
    sendVerificationEmail({
      email: "m.junaidbkh2020@gmail.com",
      pdfFilePath: filePath,
      emailType: "sendPdf",
    });
    return new NextResponse(
      JSON.stringify({ message: "successfully buy a ticket", data: ticket }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log("errror ", error.message);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
