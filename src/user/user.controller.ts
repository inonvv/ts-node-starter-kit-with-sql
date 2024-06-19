import { Request, Response } from "express";
import { createUser } from "./user.model";

export async function getAllUsers(req: Request, res: Response) {
  try {
    res.send("hello from users");
  } catch (error) {
    res.status(500).json(error);
  }

}

export async function getUserById(req: Request, res: Response) {
  try {
    let { id } = req.params;
    res.send(`hello to user ${id}`);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function addUser(req: Request, res: Response) {
  try {
    let { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "all fields are required" });

    let result = await createUser({ name, email, password });
    if (!result)
      return res.status(500).json({ message: "user creation failed" });

    res.status(201).json({ message: `user created!`, result });
  } catch (error) {
    res.status(500).json(error);
  }
}

