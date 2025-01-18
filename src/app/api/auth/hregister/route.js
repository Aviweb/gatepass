import { hash } from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  console.log("post function");

  const { designation, clerkId, password, hostel } = await req.json();

  if (!designation || !clerkId || !hostel || !password) {
    console.log("resinside");
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }
  const hashedPassword = await hash(password, 10);

  try {
    console.log("has", hashedPassword);

    const user = await prisma.HostelDetails.create({
      data: {
        uuid: uuidv4(),
        clerkId,
        designation,
        hostel,
        password: hashedPassword,
      },
    });
    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
    });
  } catch (error) {
    if (error?.code === "P2002")
      return new Response(
        JSON.stringify({ error: "Clerk Id. already exists" }),
        {
          status: 400,
        }
      );

    return new Response(JSON.stringify({ error: error }), {
      status: 400,
    });
  }
}

export async function GET() {
  try {
    const users = await prisma.HostelDetails.findMany();

    if (users.length === 0) {
      return new Response(JSON.stringify({ message: "No records found." }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "All data fetched successfully!",
        data: users,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}
