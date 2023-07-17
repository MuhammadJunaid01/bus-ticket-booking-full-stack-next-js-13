import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserTypes {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  picture: string;
  isVerified: boolean;
  verificationToken?: string;
}
interface IProductDocument extends UserTypes, Document {}
interface IProductModel extends Model<IProductDocument> {}
const UserSchema = new Schema<UserTypes>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    picture: String,
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IProductDocument, IProductModel>("User", UserSchema);
