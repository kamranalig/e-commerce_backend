const orderService = require("../services/order.service");
const createOrders = async (req, res) => {
  const user = await req.user;
  try {
    const createOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  // const user = await req.user;
  console.log("here is id", req.params.orderId);
  try {
    const orderId = req.params.orderId;
    console.log("id", orderId);
    const createdOrder = await orderService.findOrderById(orderId);
    console.log("here data", createdOrder);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.userOrderHistory(user._id);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOrders,
  findOrderById,
  orderHistory,
};
