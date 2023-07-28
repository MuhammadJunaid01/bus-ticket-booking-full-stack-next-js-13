import nodemailer from "nodemailer";
import fs from "fs-extra";
import path from "path";
import config from "@/config";

const { HOST_EMAIL, HOST_PASSWORD } = config.auth;
const { BASE_URL } = config.url;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: HOST_EMAIL,
    pass: HOST_PASSWORD,
  },
});

function isValidEmail(email: string) {
  // A basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
interface verifyEmail {
  email: string;
  verificationToken?: string;
  emailType?: "verifyEmail" | "sendPdf";
  pdfFilePath?: string;
}
export const sendVerificationEmail = ({
  email,
  emailType,
  verificationToken,
  pdfFilePath,
}: verifyEmail) =>
  // Path to the PDF file you want to attach (optional)
  {
    let mailOptions: any;

    if (emailType === "verifyEmail") {
      mailOptions = {
        from: HOST_EMAIL,
        to: email,
        subject: emailType,
        text: `Click the following link to verify your email: ${BASE_URL}/verifyEmail?token=${verificationToken}&email=${email}`,
      };
    } else if (emailType === "sendPdf" && pdfFilePath) {
      mailOptions = {
        from: HOST_EMAIL,
        to: email,
        subject: emailType,
        attachments: [
          {
            filename: "Your Ticket Information.pdf", // Change the filename as you desire
            path: pdfFilePath, // Path to the PDF file to attach
          },
        ],
      };
    } else {
      throw new Error("Invalid emailType or missing pdfFilePath");
    }

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
        // Call the callback with the error object
      } else {
        const successMessage = "Verification email sent successfully.";
      }
    });
  };
