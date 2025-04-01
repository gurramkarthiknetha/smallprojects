import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  paymentDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    require: true,
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'student',
    require: true,
  }
});

export const payment = mongoose.model("payment", paymentSchema);