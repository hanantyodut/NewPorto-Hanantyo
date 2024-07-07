"use client";
import { Images, llamsImages } from "@/app/_libs/data";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxVercelLogo } from "react-icons/rx";

type Props = { img: Images[] };
export default function ImageTrans({ img }: Props) {
  const [currentImageId, setCurrentImageId] = useState(0);

  useEffect(() => {
    const transitionalInterval = setInterval(() => {
      setCurrentImageId((prevId) => (prevId + 1) % llamsImages.length);
    }, 4000);
    return () => clearInterval(transitionalInterval);
  }, []);
  return (
    <div className="w-full md:h-[35vh] h-[26vh] md:w-[40%] bg-gray-700 rounded-md  bg-no-repeat overflow-hidden relative">
      <Link
        target="_blank"
        href={
          "https://drive.google.com/file/d/1onmUzKDPtiMErgbOcyuq-f8wqbYqWfVd/view"
        }
      >
        {
          img.map((i, index) => (
            <Image
              key={i.id}
              src={i.image}
              alt={`image ${i.id + 1}`}
              style={{
                opacity: currentImageId === index ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
              layout="fill"
              objectFit="contain"
              className="px-4 py-0"
            />
          )) as any
        }
        <Button
          disabled={false}
          className="md:bottom-5 md:left-5 bottom-3 left-3 absolute"
        >
          <div className="flex flex-row gap-2 items-center">
            <RxVercelLogo />
            <p className="text-md">Open project on vercell.</p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
