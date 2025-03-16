import LogoutButton from "@/components/admin/LogoutButton";
import Sidebar from "@/components/admin/Sidebar";
import { getServerSession } from "next-auth";

import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <div className="d-flex overflow-hidden" style={{ height: "100vh" }}>
        {/* Sidebar: Fixed, Non-Scrollable */}
        <Sidebar />

        <div className="d-flex flex-column w-100" style={{ flexGrow: 1 }}>
          {/* Header */}
          <div
            className="d-flex align-items-center justify-content-between w-100 py-3 px-5 border-bottom border-dark"
            style={{ maxHeight: "60px" }}
          >
            <h3 className="fw-medium">Admin Panel</h3>
            <LogoutButton />
          </div>

          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              height: "calc(100vh - 60px)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
