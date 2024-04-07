const stripe = require("stripe")(
  "sk_test_51OtqOwLBeP6j0c0JzWqAGMaTzC6s342EQYcYnNo9sCTyvFi752FQNptyoeSjLvLxqKghM1gLDnXX6VSToZjZ6CVm009HP8OG73"
);
const orderService = require("../services/order.service");

const createPaymentLink = async (orderId) => {
  console.log("order is here", orderId);
  try {
    const order = await orderService.findOrderById(orderId);
    console.log("orderis here ", order);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: order.totalDiscountedPrice * 100,
      currency: "usd",
      payment_method_types: ["card"],
      description: `Payment for order ${orderId}`,
      receipt_email: order.user.email,
    });
    console.log("here is pay", paymentIntent);

    return {
      clientSecret: paymentIntent.client_secret,
      message: "Payment successful",
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePaymentInformation = async (reqData) => {
  try {
    const { paymentIntentId, orderId } = reqData;

    const order = await orderService.findOrderById(orderId);

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === "succeeded") {
      order.paymentDetail.paymentId = paymentIntent.id;
      order.paymentDetail.status = "COMPLETED";
      order.orderStatus = "PLACED";

      await order.save();
    }

    return { message: "Your order is placed", success: true };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPaymentLink,
  updatePaymentInformation,
};
