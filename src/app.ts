import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("My campus server is runnig");
});

export default app;
