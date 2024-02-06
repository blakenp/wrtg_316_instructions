"use client";

import Link from "next/link";
import { FooterItems } from "../data/FooterItems";
import "../styling/Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      {FooterItems.map((item) => {
        return (
          <div key={item.authorName}>
            <div className="footer-items">
              {item.authorName}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Footer;