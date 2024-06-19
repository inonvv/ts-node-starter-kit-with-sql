import { Router} from "express";
import { getAllUsers, getUserById, addUser } from "./user.controller";

//create router
const userRouter = Router();

//defined verbs
userRouter
  .get('/', getAllUsers)
  .get('/:id', getUserById)
  .post('/', addUser)

//export
export default userRouter;