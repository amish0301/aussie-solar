"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import addIcon from "../../../public/assets/img/add_icon.png";
import logo from "../../../public/assets/img/logo.png";
import blog_icon from "../../../public/assets/img/blog_icon.png";
import email_icon from "../../../public/assets/img/email_icon.png";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: StaticImageData;
  label: string;
  active: boolean;
}

function SidebarLink({ href, icon, label, active }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className="d-flex align-items-center border rounded px-3 py-2 shadow-sm"
      style={{
        backgroundColor: active ? "rgba(0,0,0,0.15)" : "#F3F4F6", // Light gray for active, dark transparent for inactive
        boxShadow: active ? "-4px 4px 0px #888" : "-4px 4px 0px #222",
        textDecoration: "none",
        transition:
          "background-color 0.3s ease-in-out, opacity 0.3s ease-in-out",
        opacity: active ? "1" : "0.85", // Slightly faded inactive links
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.opacity = active ? "1" : "0.85")
      }
    >
      <Image src={icon} alt={label} width={24} />
      <p className="d-none d-sm-inline-block m-0 ms-2">{label}</p>
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div
      className="d-flex flex-column bg-light vh-100 border-end shadow-md"
      style={{ width: "18rem" }}
    >
      {/* Logo Section */}
      <div className="px-4 py-3 border-bottom cursor-pointer text-center bg-white">
        <Image src={logo} width={140} height={50} alt="Logo" />
      </div>

      {/* Sidebar Section */}
      <div className="d-flex flex-column gap-3 p-3">
        <SidebarLink
          href="/admin/add-blog"
          icon={addIcon}
          label="Add Blogs"
          active={pathname === "/admin/add-blog"}
        />
        <SidebarLink
          href="/admin/blog-list"
          icon={blog_icon}
          label="Manage Blogs"
          active={pathname === "/admin/blog-list"}
        />
        <SidebarLink
          href="/admin/subscriptions"
          icon={email_icon}
          label="Subscriptions"
          active={pathname === "/admin/subscriptions"}
        />
      </div>
    </div>
  );
}
