const express = require("express");
const cors = require("cors");

const app = express();

const form_routes = require("./routes/form_routes");
const { connectToDB } = require("./dbConnection/dbConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  return next();
});

app.use("/", form_routes);

const port = process.env.PORT || 3001;

connectToDB(() => {
  app.listen(port, () => console.log("callback function while listening"));
});
