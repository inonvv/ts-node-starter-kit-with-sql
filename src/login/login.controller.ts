import { Request, Response } from "express";

export async function authenticate(req: Request, res: Response) {
  const { username, password } = req.body;
  // Hard-coded credentials
  if (username === "admin" && password === "password") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}
