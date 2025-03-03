// server.js
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import counterRoutes from "./routes/counter.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/", counterRoutes);

app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});
