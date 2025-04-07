const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      state: { type: String },
      country: { type: String },
      zipcode: { type: String },
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
