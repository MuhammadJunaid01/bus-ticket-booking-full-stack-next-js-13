import { NextRequest, NextResponse } from "next/server";
// Use the default import syntax
import jsPDF from "jspdf";
import fs from "fs-extra";
import path from "path";
import autoTable from "jspdf-autotable";
import { sendVerificationEmail } from "@/lib/email";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const seatNumbers: number[] = [2, 5, 88, 5, 10];
  //   const doc = new jsPDF();
  //   const fileName = "generated.pdf"; // Change the file name if needed
  //   const filePath = path.join(__dirname, fileName); // Save the file in the current working directory
  const doc = new jsPDF();
  const fileName = `${Math.trunc(Math.random() * 10000) + "generated.pdf"}`; // Change the file name if needed
  const publicPath = path.join(process.cwd(), "public");

  const pdfFolderPath = path.join(publicPath, "pdf");
  const filePath = path.join(pdfFolderPath, fileName);
  await fs.ensureDir(pdfFolderPath);

  autoTable(doc, {
    head: [["Name", "Email", "Country"]],
    body: [
      ["David", "david@example.com", "Sweden"],
      ["Castille", "castille@example.com", "Spain"],
      // ...
    ],
  });

  doc.save(filePath);
  const pdfBuffer = doc.output("arraybuffer");

  // Convert the pdfBuffer from ArrayBuffer to Buffer
  const bufferPdf = Buffer.from(pdfBuffer);
  sendVerificationEmail({
    email: "m.junaidbkh2020@gmail.com",
    // pdfBuffer: bufferPdf,
    emailType: "sendPdf",
  });
  //   console.log("path pfg", pathD);
  // Add content to the PDF
  doc.setFontSize(25);
  doc.text("Hello, This is your PDF!", 10, 10);

  // Save the PDF to a buffer

  const response = new NextResponse(Buffer.from(bufferPdf));
  response.headers.set("Content-Type", "application/pdf");
  response.headers.set(
    "Content-Disposition",
    `attachment; filename=${fileName}`
  );
  //   res.setHeader("Content-Type", "application/pdf");
  //   res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

  // Stream the generated PDF to the client
  //   res.send(Buffer.from(pdfBuffer));

  // Optionally, you can remove the generated file after sending it to the client

  await fs.remove(filePath);
  console.log(__dirname);
  return response;
  //   doc.pipe(fs.createWriteStream("../auth/padf.pdf")); // write to PDF
  // return new NextResponse(JSON.stringify({ m: "jnjnkjkj" }));
};
