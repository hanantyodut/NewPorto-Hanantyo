"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function RocketButton() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isAtTop = window.scrollY === 100;
      setShowButton(!isAtTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky bottom-20 md:left-[88%] left-[80%] z-50 max-w-8">
      <Link href={"#"}>
        <Button className="" disabled={!showButton}>
          <FaArrowUp />
        </Button>
      </Link>
    </div>
  );
}
