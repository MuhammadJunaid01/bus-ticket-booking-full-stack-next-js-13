import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs-extra";
import path from "path";
import { sendVerificationEmail } from "@/lib/email";
import { promisify } from "util";
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
  const jsPDF = (await import("jspdf")).default; // Dynamic import of jspdf
  const autoTable = (await import("jspdf-autotable")).default;
  const doc = new jsPDF();

  const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed
  const publicPath = path.join(process.cwd(), "public");
  // console.log("BUS Number", busNumber);
  const pdfFolderPath = path.join(publicPath, "pdf");
  const filePath = path.join(pdfFolderPath, fileName);
  await fs.ensureDir(pdfFolderPath);
  const text = "Ticket Information";
  const fontSize = 12; // Adjust the font size if needed
  const textWidth =
    doc.getTextWidth(text) * (fontSize / doc.internal.scaleFactor);
  const pageWidth = doc.internal.pageSize.getWidth();
  const centerPosition = (pageWidth - textWidth) / 2;
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
    // const pdfBuffer = doc.output("arraybuffer");
    const totalPrice = seatNumber.reduce(
      (total: number, seat: number) => total + seat * bus.seatPrice,
      0
    );
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

    doc.save(filePath);
    await fs.writeFile(filePath, Buffer.from(pdfBuffer));
    const response = new NextResponse(Buffer.from(pdfBuffer));
    sendVerificationEmail({
      email: "m.junaidbkh2020@gmail.com",
      pdfFilePath: filePath,
      emailType: "sendPdf",
    });
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );
    // const unlinkAsync = promisify(fs.unlink);

    // setTimeout(async () => {
    //   try {
    //     await unlinkAsync(filePath);
    //     console.log("PDF file deleted after 2 minutes.");
    //   } catch (error) {
    //     console.error("Error deleting the PDF file after 2 minutes:", error);
    //   }
    // }, 120000);
    return response;
    // return new NextResponse(
    //   JSON.stringify({ message: "success", data: ticket }),
    //   {
    //     status: 500,
    //   }
    // );
  } catch (error: any) {
    console.log("errror ", error.message);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
