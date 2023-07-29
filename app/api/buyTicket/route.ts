import fs from "fs-extra";
// api/buyTicket.ts

import { connectDB } from "@/lib/db";
import Bus from "@/lib/models/buss.models";
import Ticket from "@/lib/models/ticket.models";
import { NextRequest, NextResponse } from "next/server";
import { sendVerificationEmail } from "@/lib/email";
import path from "path";
import { promisify } from "util";

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
  const jsPDF = (await import("jspdf")).default; // Dynamic import of jspdf
  const autoTable = (await import("jspdf-autotable")).default;
  const doc = new jsPDF();
  const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed
  const publicPath = path.join(process.cwd(), "public");

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
    const totalPrice = seatNumber.reduce(
      (total: number, seat: number) => total + seat * bus.seatPrice,
      0
    );
    doc.save(filePath);
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
    await fs.writeFile(filePath, Buffer.from(pdfBuffer));

    const response = new NextResponse(Buffer.from(pdfBuffer));

    // Send the PDF as a response
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    // res.send(Buffer.from(pdfBuffer));

    // Send the email
    sendVerificationEmail({
      email: "m.junaidbkh2020@gmail.com",
      pdfBuffer: pdfBuffer, // You might need to modify the email sending function to accept a PDF buffer directly
      emailType: "sendPdf",
    });
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    const unlinkAsync = promisify(fs.unlink);

    setTimeout(async () => {
      try {
        await unlinkAsync(filePath);
        console.log("PDF file deleted after 2 minutes.");
      } catch (error) {
        console.error("Error deleting the PDF file after 2 minutes:", error);
      }
    }, 120000);
    return response;
  } catch (error: any) {
    console.log("errror ", error.message);
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};
// import { v2 as cloudinary } from "cloudinary";
// import { NextRequest, NextResponse } from "next/server";
// import fs from "fs-extra";
// import path from "path";
// import { sendVerificationEmail } from "@/lib/email";
// import { connectDB } from "@/lib/db";
// import Bus from "@/lib/models/buss.models";
// import Ticket from "@/lib/models/ticket.models";

// // Configure Cloudinary with your cloud name, API key, and API secret
// cloudinary.config({
//   cloud_name: "jmart-clowd",
//   api_key: "411327712868453",
//   api_secret: "F77m1qUXiX-GxILfTwjoZsHNF6U",
// });

// export const POST = async (req: NextRequest, res: NextResponse) => {
//   connectDB();

//   const body = await req.json();
//   const {
//     userId,
//     busId,
//     seatNumber,
//     boardingPlace,
//     destination,
//     date,
//     email,
//     id,
//     name,
//     busNumber,
//   } = body;
//   if (
//     userId === "" ||
//     busId === "" ||
//     seatNumber.length === 0 ||
//     boardingPlace === "" ||
//     destination === "" ||
//     date === "" ||
//     email === "" ||
//     id === "" ||
//     name === "" ||
//     busNumber === undefined
//   ) {
//     return new NextResponse(
//       JSON.stringify({ message: "something you miss try again!" }),
//       {
//         status: 404,
//       }
//     );
//   }
//   const bus = await Bus.findById(busId);
//   const jsPDF = (await import("jspdf")).default; // Dynamic import of jspdf
//   const autoTable = (await import("jspdf-autotable")).default;
//   const doc = new jsPDF();
//   const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed

//   const text = "Ticket Information";
//   const fontSize = 12; // Adjust the font size if needed
//   const textWidth =
//     doc.getTextWidth(text) * (fontSize / doc.internal.scaleFactor);
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const centerPosition = (pageWidth - textWidth) / 2;
//   try {
//     if (!bus) {
//       throw new Error("Bus not found");
//     }

//     // Check if the seat is available
//     if (bus.availableSeats <= 0) {
//       throw new Error("No available seats");
//     }

//     // Check if the seat is already taken
//     const isSeatTaken = bus.passengers.some(
//       (passenger: {
//         seatNumber: number[];
//         purchaseDate: Date;
//         destination: string;
//       }) =>
//         passenger.seatNumber.includes(
//           seatNumber.map((number: number) => number)
//         ) &&
//         passenger.purchaseDate.getTime() === new Date(date).getTime() &&
//         passenger.destination === destination
//     );

//     if (isSeatTaken) {
//       throw new Error("Seat is already taken");
//     }

//     // Check payment verification status

//     // Add the ticket details to the bus
//     bus.passengers.push({
//       seatNumber: seatNumber,
//       user: userId,
//       boardingPlace,
//       destination,
//       purchaseDate: new Date(),
//     });

//     // Decrement the availableSeats count
//     bus.availableSeats--;

//     // Save the updated bus document
//     await bus.save();

//     const newTicketData = {
//       seatNumber: seatNumber, // An array of seat numbers [1, 2, 3]
//       user: userId,
//       boardingPlace,
//       destination,
//       purchaseDate: new Date(),
//       isPayment: false,
//       date: date,
//       busNumber: parseInt(busNumber),
//     };

//     // Convert seatNumber to an array of numbers and use the spread operator to clone newTicketData
//     const newTicket = new Ticket(newTicketData);

//     // Save the new ticket
//     const ticket = await newTicket.save();
//     if (!ticket) {
//       return new NextResponse(
//         JSON.stringify({ message: "something wrong! try again!" }),
//         {
//           status: 404,
//         }
//       );
//     }
//     const totalPrice = seatNumber.reduce(
//       (total: number, seat: number) => total + seat * bus.seatPrice,
//       0
//     );
//     doc.setFontSize(fontSize);
//     doc.text(text, centerPosition, 10);
//     autoTable(doc, {
//       head: [
//         [
//           "Ticket ID",
//           "Buyer Name",
//           "Price",
//           "Date",
//           "boardingPlace",
//           "Destination",
//         ],
//       ],
//       body: [[ticket._id, name, totalPrice, date, boardingPlace, destination]],
//       // ...
//     });
//     const pdfBuffer = doc.output("arraybuffer");
//     const tempFilePath = path.join(process.cwd(), "public", `${fileName}.pdf`);
//     await fs.writeFile(tempFilePath, Buffer.from(pdfBuffer));
//     // Upload the generated PDF to Cloudinary directly from the buffer
//     const cloudinaryResponse = await cloudinary.uploader.upload(tempFilePath, {
//       resource_type: "raw",
//       public_id: fileName,
//       folder: "pdf",
//     });
//     await fs.unlink(tempFilePath);
//     console.log("cloudinaryResponse", cloudinaryResponse);
//     // Send the email with the Cloudinary URL of the PDF

//     sendVerificationEmail({
//       email: "m.junaidbkh2020@gmail.com",
//       pdfUrl: cloudinaryResponse.url,
//       emailType: "sendPdf",
//     });

//     // Return the Cloudinary response

//     return new NextResponse(JSON.stringify({ cloudinaryResponse }), {
//       status: 200,
//     });
//   } catch (error: any) {
//     console.log("error ", error.message);
//     return new NextResponse(JSON.stringify({ message: error.message }), {
//       status: 500,
//     });
//   }
// };
