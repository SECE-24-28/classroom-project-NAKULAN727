const express = require("express");
const cors = require("cors");
const database = require("./db-connect/db1");
const BasicRoutes = require("./routes/basic1-routes");
let port = 22000;
const app = express();
database.connect();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/v1/Admin", BasicRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Port is running",
  });
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
