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
    "$2a$10$RPhlOvPd9g1gsH/vZkP0uuBxx8oNDcUEwp9w2Wf5532jEak8pPvte";

  const isPasswordValid = await compare(password, storedPasswordHash);

  if (!isPasswordValid) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  const token = jwt.sign(
    { userId: "gateKeeper", role: "gateKeeper" },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return new Response(
    JSON.stringify({ success: true, token, uuid: "gateKeeper" }),
    {
      status: 200,
    }
  );
}
