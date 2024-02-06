"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItems } from "../data/NavItems";
import '../styling/NavBar.css';

function NavBar() {
  const pathname = usePathname();

  const handleHomeNavigation = () => {
    window.location.href = "/";
  };

  const handleOtherNavigation = (menuItemPath: string) => {
    window.location.href = `${menuItemPath}`;
  };

  return (
    <div className="navbar">
      <div onClick={handleHomeNavigation} className="sitetitle">
        WRTG 316 Instructions
      </div>
      <nav>
        {NavItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <Link key={item.title} href={item.url}>
              <div
                className={isActive ? "activeNavLink" : "navLink"}
                onClick={() => handleOtherNavigation(item.url)}
              >
                {item.title}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;