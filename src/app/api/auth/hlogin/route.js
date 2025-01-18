import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const response = await req.json();
  const { clerkId, password } = response;

  if (!clerkId || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const user = await prisma.hostelDetails.findUnique({
    where: {
      clerkId, // Replace with the desired clerkId
    },
  });
  console.log("uesr", user);

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

  const token = jwt.sign(
    { userId: user.uuid, role: "hostelClerk" },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  //   console.log("hello for token ", user.uuid);

  return new Response(
    JSON.stringify({ success: true, token, uuid: user?.uuid }),
    {
      status: 200,
    }
  );
}
// }
