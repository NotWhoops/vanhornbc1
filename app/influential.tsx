"use client";
import Image from "next/image";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-white h-52">
        <Navbar fluid rounded>
          <NavbarBrand as={Link} href="./app/page.tsx">
            <img
              src="./assets/luffy.png"
              className="mr-3 h-6 sm:h-9"
              alt="Luffy Logo"
            />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="./app/page.tsx">Home</NavbarLink>
            <NavbarLink href="./app/about.tsx">About</NavbarLink>
            <NavbarLink href="./app/influentail.tsx">Influential</NavbarLink>
            <NavbarLink href="./app/enemies.tsx">Enemies</NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
      <div className="dark:bg-black text-center">
        <h1>
          Luffy's influence comes from the way he reshapes the world simply by
          being himself. His unwavering belief in freedom inspires entire
          nations to rise up, and his refusal to abandon anyone in need turns
          him into a symbol of hope long before he ever seeks that role. People
          follow him not because he demands it, but because his authenticity,
          courage, and kindness make others want to be braver too. Even enemies
          find themselves changed after meeting him, pushed to question their
          own values or rediscover forgotten dreams. Luffy doesn't preach
          ideology—he lives his convictions so boldly that others feel compelled
          to chase their own.
        </h1>
      </div>
      <div className="dark:bg-black flex">
        <img
          className="h-full"
          src="./assets/Trafalgar_Law.webp"
          alt="trfalgarlaw"
        />
        <img
          className="h-screen"
          src="./assets/koby.webp"
          alt="koby"
        />
        <img
          className="h-full"
          src="./assets/rebecca2.png"
          alt="rebecca"
        />
        <img
          className="h-full"
          src="./assets/vivi2.png"
          alt="vivi"
        />
      </div>
    </main>
  );
}
