const app = require(".");
const { connectDb } = require("./config/dp"); // Corrected import statement
const PORT = 5454;

app.listen(PORT, async () => {
  await connectDb();
  console.log("Ecommerce API listening on port", PORT);
});
