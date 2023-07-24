import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.models";

export interface IBus extends Document {
  busNumber: number;
  totalSeats: number;
  availableSeats: number;
  passengers: Array<{
    seatNumber: number;
    user: IUser["_id"];
    boardingPlace: string;
    destination: string;
    purchaseDate: Date; // New field to store the purchase date
  }>;
  roadName?: string;
  busType: "AC" | "Non-AC" | "Coach-Bus";
  seatPrice: number;
  // Add other relevant bus information here
}

const busSchema: Schema<IBus> = new mongoose.Schema(
  {
    busNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    totalSeats: {
      type: Number,
      required: true,
      default: 70,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    passengers: [
      {
        seatNumber: {
          type: Number,
          required: true,
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        boardingPlace: {
          type: String,
          required: true,
        },
        destination: {
          type: String,
          required: true,
        },
      },
    ],
    roadName: {
      type: String, // Update this to be a string field (optional)
      default: null, // Set a default value or omit this line if no default value is needed
    },
    busType: {
      type: String,
      enum: ["AC", "Non-AC", "Coach-Bus"], // Enum restricts the allowed values to the specified array
      required: true,
    },
    seatPrice: {
      type: Number, // You can change this to `String` if you want to store seat prices as strings (e.g., "$50")
      required: true,
    },
  },
  { timestamps: true }
);

const Bus = mongoose.models.Bus || mongoose.model<IBus>("Bus", busSchema);

export default Bus;
