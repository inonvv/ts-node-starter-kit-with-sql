import { Router } from "express";
import { getFormInformation, PostFormInformation } from "./form.controller";

//create router
const formRouter = Router();

//defined verbs
formRouter.get("/", getFormInformation);
formRouter.post("/", PostFormInformation);

//export
export default formRouter;
