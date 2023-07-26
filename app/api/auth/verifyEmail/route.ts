import { NextApiRequest, NextApiResponse } from "next";
import User from "@/lib/models/user.models";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, verificationToken } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email, verificationToken },
      { $set: { isVerified: true }, $unset: { verificationToken: 1 } },
      { new: true }
    );

    if (user) {
      // Save user data in cookies
      res.setHeader(
        "Set-Cookie",
        `user=${JSON.stringify(user)}; Path=/; Max-Age=86400`
      );
      // Adjust the path and max age as needed

      return res.status(200).json({ message: "Email verified", user });
    } else {
      return res.status(400).json({ message: "Invalid verification token" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Invalid verification token", error: error.message });
  }
};
