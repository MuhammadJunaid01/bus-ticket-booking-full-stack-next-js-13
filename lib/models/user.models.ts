import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  picture: string;
  isVerified: boolean;
  verificationToken?: string;
  isAdmin: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    picture: String,
  },
  { timestamps: true }
);

// const User : mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
// export default User;
const User: mongoose.Model<IUser & Document> =
  mongoose.models.User || mongoose.model<IUser & Document>("User", UserSchema);
export default User;
