import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const data = await request.json();

    // Validate the data
    const {
      uuid,
      status,
      name,
      roll,
      branch,
      hostel,
      phoneNo,
      date,
      reason,
      user_uuid,
    } = data;

    if (uuid && status) {
      console.log("inside", uuid, status);
      let updatedGatePass;
      if (status === "moved-out") {
        updatedGatePass = await prisma.gatePass.update({
          where: { id: uuid },
          data: {
            status,
            outTime: new Date(),
          },
        });
      } else if (status === "moved-in") {
        updatedGatePass = await prisma.gatePass.update({
          where: { id: uuid },
          data: {
            status,
            inTime: new Date(),
          },
        });
      } else {
        updatedGatePass = await prisma.gatePass.update({
          where: { id: uuid },
          data: {
            status,
          },
        });
      }

      // yaha se mail bhejenge
      return new Response(
        JSON.stringify({
          message: "Status updated successfully!",
          data: updatedGatePass,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!name || !roll || !branch || !hostel || !phoneNo || !date || !reason) {
      console.log("outside");

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
        date: new Date(date), // Use the validated date
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
    const uuid = searchParams.get("uuid");
    const hostel = searchParams.get("hostel");
    // const

    let gatePasses;

    if (uuid) {
      console.log("inside");

      // Fetch records matching the UUID
      gatePasses = await prisma.gatePass.findMany({
        where: {
          id: uuid,
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
    } else if (hostel) {
      console.log("inside", hostel);

      // Fetch records matching the UUID
      gatePasses = await prisma.gatePass.findMany({
        where: {
          hostel: hostel, // Replace with the specific hostel name you want
        },
      });

      if (gatePasses.length === 0) {
        return new Response(
          JSON.stringify({
            message: "No records found for the provided Hostel",
            hostel,
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
