import { Request, Response } from "express";
import { getFormInformationM, PostFormInformationM } from "./form.model";

export async function getFormInformation(req: Request, res: Response) {
  try {
    const result = await getFormInformationM();
    res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function PostFormInformation(req: Request, res: Response) {
  try {
    const formInformation = req.body;
    console.log("controller", formInformation);
    await PostFormInformationM(formInformation);
    res.send({ success: true });
  } catch (error) {
    res.status(500).json(error);
  }
}
