"use client"

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
          <NavbarBrand as={Link} href="./pages/page.tsx">
            <img
              src="./assets/luffy.png"
              className="mr-3 h-6 sm:h-9"
              alt="Luffy Logo"
            />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="./pages/page.tsx">Home</NavbarLink>
            <NavbarLink href="./pages/about.tsx">About</NavbarLink>
            <NavbarLink href="./pages/influentail.tsx">Influential</NavbarLink>
            <NavbarLink href="/pages/enemies.tsx">Enemies</NavbarLink>
          </NavbarCollapse>
        </Navbar>
        </div>
        <div className="dark:bg-black text-center">
          <h1>
            Monkey D. Luffy stands as a symbol of unshakable freedom and
            inspiration, a character whose impact reaches far beyond the world
            of One Piece. His fearless pursuit of his dreams and unwavering
            loyalty to his friends ignite change everywhere he goes, empowering
            others to rise, fight back, and believe in their own potential.
            Luffy doesn't lead through authority. He leads through authenticity,
            kindness, and a relentless spirit that refuses to bow to injustice.
            His presence transforms people, nations, and even enemies, reminding
            us that true strength comes from staying true to who you are and
            never giving up on what matters most.
          </h1>
        </div>
        <div className="dark:bg-black flex">
          <img
            className="h-full"
            src="./assets/luffybase2.png"
            alt="luffy base form"
          />
          <img
            className="h-screen"
            src="./assets/luffywano2.png"
            alt="luffy base form"
          />
          <img
            className="h-full"
            src="./assets/luffyegghead2.png"
            alt="luffy base form"
          />
        </div>
      </main>
  );
}
