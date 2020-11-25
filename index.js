const dotenv = require("dotenv");
const weatherModel = require("./models/weatherModel");
const db = require("./db");
const exampleData = require("./data/weatherData");
const auth = require("./utils/auth");
const adminBro = require("./utils/adminbroInstance");

dotenv.config();

//Express init
const express = require("express");
const app = express();

//Test connection
db.authenticate()
  .then(console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", error));

//Example data

const example = async () => {
  await weatherModel.sync({ force: true });
  await weatherModel.create(exampleData);
};
example();

app.use(adminBro.options.rootPath, auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`AdminBro is running on port: ${PORT}`));
