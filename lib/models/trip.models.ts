import mongoose, { Document, Schema } from "mongoose";
import { IBus } from "./buss.models";

// Define the Trip schema
interface ITrip extends Document {
  bus: IBus["_id"];
  departureTime: Date;
  destination: string;
  seatPrice: number;
  // Add other relevant trip information here, like arrival time, etc.
}

const tripSchema: Schema<ITrip> = new mongoose.Schema(
  {
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
    },
    departureTime: {
      type: Date,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    seatPrice: {
      type: Number, // You can change this to `String` if you want to store seat prices as strings (e.g., "$50")
      required: true,
    },
    // Add other relevant trip information here, like arrival time, etc.
  },
  { timestamps: true }
);

const Trip = mongoose.models.Trip || mongoose.model<ITrip>("Trip", tripSchema);
export default Trip;
