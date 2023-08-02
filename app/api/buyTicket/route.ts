import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/email";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const POST = async (req: NextRequest, res: NextResponse) => {
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
  if (
    userId === "" ||
    busId === "" ||
    seatNumber.length === 0 ||
    boardingPlace === "" ||
    destination === "" ||
    date === "" ||
    email === "" ||
    id === "" ||
    name === "" ||
    busNumber === undefined
  ) {
    return new NextResponse(
      JSON.stringify({ message: "something you miss try again!" }),
      {
        status: 404,
      }
    );
  }
  const bus = await Bus.findById(busId);

  const doc = new jsPDF();
  const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed
  const text = "Ticket Information";
  const fontSize = 12; // Adjust the font size if needed
  const textWidth =
    doc.getTextWidth(text) * (fontSize / doc.internal.scaleFactor);
  const pageWidth = doc.internal.pageSize.getWidth();
  const centerPosition = (pageWidth - textWidth) / 2;

  const totalPrice = seatNumber.length * bus.seatPrice;

  try {
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

    doc.setFontSize(fontSize);
    doc.text(text, centerPosition, 10);
    autoTable(doc, {
      head: [
        [
          "Ticket ID",
          "Buyer Name",
          "Price",
          "Date",
          "boardingPlace",
          "Destination",
        ],
      ],
      body: [[ticket._id, name, totalPrice, date, boardingPlace, destination]],
      // ...
    });

    const pdfBuffer = doc.output("arraybuffer");

    // Send the email with the PDF buffer as an attachment
    sendVerificationEmail({
      email: "m.junaidbkh2020@gmail.com",
      pdfBuffer: pdfBuffer,
      emailType: "sendPdf",
    });

    const response = new NextResponse(Buffer.from(pdfBuffer));
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    return response;
  } catch (error: any) {
    console.log("error ", error.message);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
