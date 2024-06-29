"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function RocketButton() {
  const [showButton, setShowButton] = useState(true); // Initially show the button

  useEffect(() => {
    const handleScroll = () => {
      // Calculate if we're at the top of the page
      const isAtTop = window.scrollY === 100;

      // Update button visibility based on scroll position
      setShowButton(!isAtTop);
    };

    // Attach scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="sticky bottom-20 md:left-[88%] left-[80%] z-50 max-w-8">
      <Link href={"#home"}>
        <Button className="" disabled={!showButton}>
          <FaArrowUp />
        </Button>
      </Link>
    </div>
  );
}
