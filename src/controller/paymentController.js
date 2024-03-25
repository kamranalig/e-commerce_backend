const paymentService = require("../services/payment.service");

const createPaymentLink = async (req, res) => {
  try {
    const orderId = req.params.id;
    // console.log("paramsId", orderId);
    const paymentLink = await paymentService.createPaymentLink(orderId);

    return res.status(201).send(paymentLink);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updatePaymentInformation = async (req, res) => {
  try {
    const updateResult = await paymentService.updatePaymentInformation(
      req.body
    );

    return res.status(200).send(updateResult);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createPaymentLink,
  updatePaymentInformation,
};
