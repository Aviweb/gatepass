import { PrismaClient } from "@prisma/client";
import { PDFDocument, rgb } from "pdf-lib";
import fetch from "node-fetch"; // if running server-side

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestId = searchParams.get("id");

  if (!requestId) {
    return new Response(JSON.stringify({ message: "ID is required" }), {
      status: 400,
    });
    // return Response.redirect("https://yourdomain.com/success");
  }

  const gatePass = await prisma.gatePass.findUnique({
    where: { id: requestId },
  });

  if (!gatePass || !gatePass.qrCode) {
    return new Response(JSON.stringify({ message: "QR Code not found" }), {
      status: 404,
    });
    // return Response.redirect("https://yourdomain.com/success");
  }

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([300, 400]);

  // fetch base64 image and embed
  const imageBytes = await fetch(gatePass.qrCode).then((res) =>
    res.arrayBuffer()
  );
  const pngImage = await pdfDoc.embedPng(imageBytes);

  page.drawImage(pngImage, {
    x: 50,
    y: 150,
    width: 200,
    height: 200,
  });

  page.drawText("Gate Pass QR Code", {
    x: 80,
    y: 370,
    size: 14,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  return new Response(Buffer.from(pdfBytes), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=gatepass-${requestId}.pdf`,
    },
  });
}
