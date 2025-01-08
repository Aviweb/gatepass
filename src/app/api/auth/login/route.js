import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../../lib/prisma";
import { log } from "console";

export async function POST(req) {
  const { roll_no, password } = await req.json();

  console.log("hello from the console", process.env.JWT_SECRET);

  if (!roll_no || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const user = await prisma.users.findUnique({ where: { roll_no } });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return new Response(JSON.stringify({ success: true, token }), {
    status: 200,
  });
}
