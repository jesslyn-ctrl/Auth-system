require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const url = process.env.MONGODB_URL;
const dbName = process.env.DB;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Failed to connect MongoDB."));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
  console.log(process.env.JWT_SECRET_KEY);
});
