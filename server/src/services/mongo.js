const mongoose = require("mongoose");

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);

mongoose.connection.once("open", () => {
  console.log("Mongo Conection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
