import mongoose, { Schema, Document } from "mongoose";

interface Seat extends Document {
  seat: string;
  passengerName: string;
  passengerId: number | null;
  isBooked: boolean;
}

const seatSchema: Schema = new Schema({
  seat: { type: String, required: true },
  passengerName: { type: String, default: "" },
  passengerId: { type: Number, default: null },
  isBooked: { type: Boolean, default: false },
});

interface AvailableBussData extends Document {
  bussNumber: number;
  road: string;
  startTime: string;
  reachedTime: string;
  seats: {
    A: Seat[];
    B: Seat[];
    // Add other groups (C, D, etc.) if needed
  };
  img: string;
  category: "Ac" | "Non-Ac" | "Coach bus";
}

const busesSchema: Schema = new Schema(
  {
    bussNumber: { type: Number, required: true },
    road: { type: String, required: true },
    startTime: { type: String, required: true },
    reachedTime: { type: String, required: true },
    seats: {
      A: [seatSchema],
      B: [seatSchema],
      // Add other groups (C, D, etc.) if needed
    },
    img: { type: String, required: true },
    category: {
      type: String,
      enum: ["Ac", "Non-Ac", "Coach bus"],
      required: true,
    },
  },
  { timestamps: true }
);

const Buses =
  mongoose.models.Buses ||
  mongoose.model<AvailableBussData>("Buses", busesSchema);

export default Buses;
