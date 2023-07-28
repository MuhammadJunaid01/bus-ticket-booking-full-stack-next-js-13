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
function isValidEmail(email: string) {
  // A basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export const sendVerificationEmail = (
  email: string,
  verificationToken: string,
  emailType: string,
  callback: (error: Error | null, successMessage?: string) => void
) => {
  const mailOptions = {
    from: HOST_EMAIL,
    to: email,
    subject: emailType,
    text: `Click the following link to verify your email: ${BASE_URL}/verifyEmail?token=${verificationToken}&email=${email}`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
      callback(error); // Call the callback with the error object
    } else {
      const successMessage = "Verification email sent successfully.";
      callback(null, successMessage); // Call the callback with null for error and the success message
    }
  });
};
