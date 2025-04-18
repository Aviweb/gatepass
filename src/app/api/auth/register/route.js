import { hash } from "bcryptjs";
import prisma from "../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  console.log("post function");

  const { name, roll_no, password, email } = await req.json();

  if (!name || !roll_no || !password || !email) {
    console.log("resinside");
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }
  const hashedPassword = await hash(password, 10);

  try {
    const user = await prisma.users.create({
      data: { uuid: uuidv4(), name, roll_no, password: hashedPassword, email },
    });
    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
    });
  } catch (error) {
    if (error?.code === "P2002")
      return new Response(
        JSON.stringify({ error: "Roll No. already exists" }),
        {
          status: 400,
        }
      );

    return new Response(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
}
