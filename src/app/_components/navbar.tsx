"use client";
import { Flowbite, Navbar, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";
import { navItemTheme } from "../_libs/flowbite.theme";
import clsx from "clsx";
import Link from "next/link";
import { merriweather, merriweather_sans } from "../_utils/fonts";
import { DarkMode } from "./darkmode";
import { navLinks } from "../_libs/data";
import Contacts from "./navbar.dropdown";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Flowbite theme={{ theme: navItemTheme }}>
      <Navbar
        fluid
        className={clsx(
          "sticky top-0 z-50 w-full text-black transition-all duration-300 ease-in-out",
          {
            "bg-gray-600/20 backdrop-blur-md": scrolled,
            "bg-[#cccccc] dark:bg-black": !scrolled,
          },
        )}
        color="primary"
      >
        <Navbar.Brand href="/">
          <span
            className={clsx(
              merriweather.className,
              "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
            )}
          >
            Hanantyo.
          </span>
        </Navbar.Brand>
        <NavbarToggle />
        <Navbar.Collapse>
          {navLinks.map(({ path, label }, key) => (
            <Navbar.Link key={key} as={Link} href={path}>
              {label}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
        <div className="flex flex-row gap-2">
          <Contacts />
          <DarkMode />
        </div>
      </Navbar>
    </Flowbite>
  );
}
