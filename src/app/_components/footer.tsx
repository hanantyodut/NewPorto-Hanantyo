"use client";

import clsx from "clsx";
import { Flowbite, Footer } from "flowbite-react";
import { merriweather } from "../_utils/fonts";
import { footerItemTheme } from "../_libs/flowbite.theme";

export default function PortoFooter() {
  return (
    <Flowbite theme={{ theme: footerItemTheme }}>
      <Footer container className="transition-colors duration-300">
        <div className="w-full">
          <div className="w-full justify-between sm:flex  sm:justify-between ">
            <span
              className={clsx(
                merriweather.className,
                "whitespace-nowrap text-2xl font-semibold text-black dark:text-white",
              )}
            >
              Hanantyo.
            </span>
            <Footer.LinkGroup className="mt-2 ">
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Hanantyo" year={2024} />
        </div>
      </Footer>
    </Flowbite>
  );
}
