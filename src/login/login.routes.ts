import { Router } from "express";
import { authenticate } from "./login.controller";

const loginRouter = Router();
loginRouter.post("/auth", authenticate);

export default loginRouter;
