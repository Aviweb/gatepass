import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const response = await req.json();
  const { name, password } = response;

  if (!name || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const storedPasswordHash =
    "$2a$10$GFCjh/CvSVAy3a/2sdhpq.EM2oxrmuJs/3hobThzlgAiDpszl8gSy";

  const isPasswordValid = await compare(password, storedPasswordHash);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  const token = jwt.sign(
    { userId: "admin", role: "admin" },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return new Response(JSON.stringify({ success: true, token, uuid: "admin" }), {
    status: 200,
  });
}
