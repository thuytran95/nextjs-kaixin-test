import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        listStyle: "none",
      }}
    >
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
  );
}
