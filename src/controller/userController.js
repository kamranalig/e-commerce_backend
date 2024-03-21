const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(404).send({ error: "Token not foundss" });
    }

    const jwt = authorizationHeader.split(" ")[1];

    const user = await userService.getUserProfileByToken(jwt);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await userService.getAllUsers();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { getUserProfile, getAllUser };
