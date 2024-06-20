import express from "express";
import userRouter from "./user/user.routes";

//enable environment variables
import "dotenv/config";

//set the port number
const PORT = process.env.PORT || 5555;

//create express app
const app = express();
app.use(express.json());

//default GET route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user routes
app.use('/api/users', userRouter);

//listen to the defined port
app.listen(PORT, () => {
  console.log(`[SERVER] Server is live http://localhost:${PORT}`);
});
