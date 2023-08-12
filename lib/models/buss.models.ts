import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./user.models";
const departureTimeValidator = {
  validator: function (value: string) {
    return /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i.test(value);
  },
  message: "Invalid departure time format. Expected format: HH:MM AM/PM",
};
export interface IBus extends Document {
  busNumber: number;
  totalSeats: number;
  availableSeats: number;
  passengers: Array<{
    seatNumber: number[];
    user: IUser["_id"];
    boardingPlace: string;
    destination: string;
    purchaseDate: Date; // New field to store the purchase date
  }>;
  roadName?: string;
  busType: "AC" | "Non-AC" | "Coach-Bus";
  seatPrice: number;
  departureTime: {
    type: string;
    required: boolean;
  };

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
      default: 52,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    passengers: [
      {
        seatNumber: {
          type: [Number], // Update to an array of numbers
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
        purchaseDate: {
          type: Date,
          required: true,
          default: Date.now, // Set the default value to the current date/time when a new passenger is added
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
    departureTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Bus = mongoose.models.Bus || mongoose.model<IBus>("Bus", busSchema);

export default Bus;
