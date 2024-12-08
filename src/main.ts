import express from "express";
import cors from "cors";
import formRouter from "./forms/form.routes";
import loginRouter from "./login/login.routes";

const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/form", formRouter);
app.use("/api/login", loginRouter);

app.listen(PORT, () => {
  console.log(`[SERVER] Server is live http://localhost:${PORT}`);
});
