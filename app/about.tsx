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
          Monkey D. Luffy is an endlessly optimistic, fiercely loyal adventurer
          whose dream of becoming Pirate King represents his desire for absolute
          freedom. He's simple minded in the best way focused only on what
          matters to him: protecting his friends, exploring the world, and
          fighting anyone who threatens others freedom. Though reckless and
          impulsive, his unbreakable will, creativity in battle, and ability to
          inspire people everywhere he goes make him a natural leader. Luffy's
          mix of goofiness, courage, and moral clarity turns him into a force
          who changes the world without ever trying to be anything other than
          himself.
        </h1>
      </div>
      <div className="dark:bg-black flex">
        <img
          className="h-screen"
          src="./assets/luffycrew2.png"
          alt="luffy base form"
        />
        <img
          className="h-full"
          src="./assets/luffycrew4.png"
          alt="luffy base form"
        />
      </div>
    </main>
  );
}
