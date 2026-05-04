require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");
connectDB();

const port = process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
