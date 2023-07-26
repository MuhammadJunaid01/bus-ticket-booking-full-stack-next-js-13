// ticket.models.ts

import mongoose, { Schema } from "mongoose";
import { ITicket } from "../interfaces";

const ticketSchema: Schema<ITicket> = new mongoose.Schema({
  seatNumber: {
    type: Number,
    required: true,
  },
  busNumber: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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
    default: Date.now,
  },
  isPayment: {
    type: Boolean,
    default: false,
  },
  // Add other relevant ticket information here, such as payment status, transaction ID, etc.
});

const Ticket =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
