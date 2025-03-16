import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type UserWithRole = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
};

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  if (!session.user) {
    redirect("/login");
  }

  const user = session.user as UserWithRole;

  return (
    <>
      <h1 className="w-100 py-3 px-4">Welcome {user.role || "back"}</h1>
    </>
  );
}
