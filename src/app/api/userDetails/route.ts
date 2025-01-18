import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const data = await request.json();

    // Validate the data
    const { name, roll, branch, hostel, phoneNo, date, reason, user_uuid } =
      data;
    if (!name || !roll || !branch || !hostel || !phoneNo || !date || !reason) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Received data:", data);

    // Save the data to the database
    const gatePass = await prisma.gatePass.create({
      data: {
        id: uuidv4(), // Generate a random UUID
        name,
        roll,
        branch,
        hostel,
        phoneNo,
        date: new Date(date), // Convert string to Date object
        reason,
        status: "pending",
        inTime: null,
        outTime: null,
        user_uuid: user_uuid,
      },
    });

    // Send a success response
    return new Response(
      JSON.stringify({ message: "Data saved successfully!", data: gatePass }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect(); // Always disconnect after the operation
  }
}

export async function GET(request: Request) {
  try {
    // Parse the URL for query parameters
    const { searchParams } = new URL(request.url);
    const uuid = searchParams.get("uuid"); // Get the UUID from the query params

    console.log("uuis", uuid);

    let users;

    if (uuid) {
      // Fetch records matching the UUID
      users = await prisma.users.findMany({
        where: {
          uuid: uuid,
        },
      });

      if (users.length === 0) {
        return new Response(
          JSON.stringify({
            message: "No records found for the provided Roll No.",
          }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({
          message: "Data fetched successfully!",
          data: users,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      users = await prisma.users.findMany({});

      if (users.length === 0) {
        return new Response(
          JSON.stringify({
            message: "No records found for the provided Roll No.",
          }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({
          message: "Data fetched successfully!",
          data: users,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
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
