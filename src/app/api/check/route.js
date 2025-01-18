export async function GET() {
  //   try {
  // const users = await prisma.HostelDetails.findMany();

  // if (users.length === 0) {
  //   return new Response(JSON.stringify({ message: "No records found." }), {
  //     status: 201,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  return new Response(
    JSON.stringify({
      message: "All data fetched successfully!",
      data: "users",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
  //   }
  //   catch (error) {
  //     console.error("Error in API route:", error);
  //     return new Response(JSON.stringify({ message: "Internal Server Error." }), {
  //       status: 500,
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } finally {
  //     await prisma.$disconnect();
  //   }
}
