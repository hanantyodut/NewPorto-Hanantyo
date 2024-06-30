"use client";

import { Dropdown, Flowbite } from "flowbite-react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaDiscord,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { dropItemTheme } from "../_libs/flowbite.theme";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="mt-6 md:mt-20 ml-[25%] md:ml-[35%]">
      <Flowbite theme={{ theme: dropItemTheme }}>
        <Dropdown
          label={
            <div className="flex flex-row items-center gap-2">
              <IoCall />
              <p className="font-thin">Contact me!</p>
            </div>
          }
          arrowIcon={true}
        >
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/hanantyodian/"}
          >
            <Dropdown.Item icon={FaLinkedin}>hanantyodian</Dropdown.Item>
          </Link>
          <Link target="_blank" href={"https://github.com/hanantyodut"}>
            <Dropdown.Item icon={FaGithub}>hanantyodut</Dropdown.Item>
          </Link>
          <Dropdown.Item icon={FaWhatsappSquare}>
            +62 8111 2835 86
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={FaDiscord}>axtonishing</Dropdown.Item>
          <Link target="_blank" href={"https://www.instagram.com/hanantyodut/"}>
            <Dropdown.Item icon={FaInstagramSquare}>hanantyodut</Dropdown.Item>
          </Link>
        </Dropdown>
      </Flowbite>
    </div>
  );
}
