const cartService = require("../services/cart.service");

const findUserCart = async (req, res) => {
  const user = await req.user;
  // console.log(user);

  try {
    const cart = await cartService.findUserCart(user);
    // console.log("hererrrrrrrrr", cart);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const addItemToCart = async (req, res) => {
  const user = await req.user;
  console.log(user, "here is");
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);

    return res.status(200).send(cartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  addItemToCart,
  findUserCart,
};
