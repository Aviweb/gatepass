import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    console.log("res", code);

    if (!code) {
      // return new Response(JSON.stringify({ message: "Code is required" }), {
      //   status: 400,
      //   headers: { "Content-Type": "application/json" },
      // });
      return Response.redirect(`${process.env.BASE_URL}/qrcode?error=code`);
    }

    const gatePass = await prisma.gatePass.findUnique({
      where: { id: code },
    });

    if (!gatePass) {
      // return new Response(
      //   JSON.stringify({ message: "Invalid or expired QR code" }),
      //   { status: 404, headers: { "Content-Type": "application/json" } }
      // );
      return Response.redirect(`${process.env.BASE_URL}/qrcode?error=gatePass`);
    }

    if (gatePass.status === "moved-out") {
      // return new Response(
      //   JSON.stringify({ message: "Already marked as moved-out" }),
      //   { status: 400, headers: { "Content-Type": "application/json" } }
      // );
      return Response.redirect(
        `${process.env.BASE_URL}/qrcode?error=already-marked`
      );
    }

    await prisma.gatePass.update({
      where: { id: gatePass.id },
      data: {
        status: "moved-out",
        outTime: new Date(),
      },
    });

    // return new Response(
    //   JSON.stringify({
    //     message: "Gate pass marked as moved-out",
    //     data: updatedPass,
    //   }),
    //   { status: 200, headers: { "Content-Type": "application/json" } }
    // );
    return Response.redirect(`${process.env.BASE_URL}/qrcode?error=marked`);
  } catch (error) {
    console.error("Error verifying gate pass:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    await prisma.$disconnect();
  }
}
