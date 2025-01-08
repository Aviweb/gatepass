import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const data = await request.json();

    // Validate the data
    const { name, roll, branch, hostel, phoneNo, date, reason } = data;
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
    const roll_no = searchParams.get("roll_no"); // Get the UUID from the query params

    let gatePasses;

    if (roll_no) {
      console.log("inside");

      // Fetch records matching the UUID
      gatePasses = await prisma.gatePass.findMany({
        where: {
          roll: roll_no,
        },
      });

      if (gatePasses.length === 0) {
        return new Response(
          JSON.stringify({
            message: "No records found for the provided Roll No.",
          }),
          { status: 404, headers: { "Content-Type": "application/json" } }
        );
      }
      console.log("hello", gatePasses);

      return new Response(
        JSON.stringify({
          message: "Data fetched successfully!",
          data: gatePasses,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Fetch all records if no UUID is provided
      gatePasses = await prisma.gatePass.findMany();

      if (gatePasses.length === 0) {
        return new Response(JSON.stringify({ message: "No records found." }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(
        JSON.stringify({
          message: "All data fetched successfully!",
          data: gatePasses,
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
