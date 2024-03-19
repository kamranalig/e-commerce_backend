const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    // required: true,
  },
  orderItems: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "orderItems",
  },

  orderDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
  },
  shippingAddress: {
    type: Number,
    required: true,
  },

  discountedPrice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "addresses",
  },
  paymentDetail: {
    paymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    paymentId: {
      type: String,
    },
    paymentStatus: {
      type: String,
      default: "PENDING",
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
  },
  discounte: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "PENDING",
  },
  totalItem: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Orders", orderSchema);
module.exports = Order;
