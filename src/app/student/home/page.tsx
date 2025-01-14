import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import RulesContainer from "@/app/components/RulesContainer";
function decodeToken(token: string) {
  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));

    return decoded.userId;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
}

async function getUserDetailsFromDatabase(uuid: string) {
  const response = await fetch(
    `http://localhost:3000/api/userDetails?uuid=${uuid}`
  );
  const responseData = await response.json();

  if (responseData) {
    return responseData?.data[0]?.name;
  }

  return "";
}
export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = cookieStore.get("uuid")?.value;
  let UserName = "";

  console.log("us", user);

  if (!token) {
    redirect("/slogin"); // Redirect to login if no token
  }

  try {
    const userUuid = decodeToken(token);

    if (!userUuid) {
      redirect("/slogin");
    }

    UserName = await getUserDetailsFromDatabase(userUuid);
  } catch (err) {
    console.log("error", err);
  }

  return (
    <>
      <Header role="student" userName={UserName} />
      <RulesContainer />
      <Footer />
    </>
  );
}
