import nodemailer from "nodemailer";
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

export const sendVerificationEmail = (
  email: string,
  verificationToken: string,
  emailType: string
) => {
  const mailOptions = {
    from: HOST_EMAIL,
    to: email,
    subject: "Email Verification",
    text: `Click the following link to verify your email: ${BASE_URL}/verifyEmail?token=${verificationToken}&email=${email}`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Error sending verification email:", error);
    }
  });
};
