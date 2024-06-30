import { bio } from "@/app/_libs/data";
import { tableItemTheme } from "@/app/_libs/flowbite.theme";
import {
  Button,
  Flowbite,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "flowbite-react";
import Link from "next/link";
import { FaArrowCircleDown, FaFilePdf, FaGoogleDrive } from "react-icons/fa";

export default function Biodata() {
  return (
    <div className="md:w-[40%]">
      <div className="flex flex-row gap-4 items-center justify-center">
        <p className="text-center text-lg md:text-xl text-gray-800 dark:text-gray-300 border-b-[1px] border-t-[1px] border-[#0891b2] font-medium px-2">
          Bio.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4 md:h-[97%] justify-between">
        <Flowbite theme={{ theme: tableItemTheme }}>
          <Table>
            <TableBody className="divide-y">
              {bio.map((b, index) => (
                <TableRow key={index}>
                  <TableCell className="text-black dark:text-white">
                    {b.name}
                  </TableCell>
                  <TableCell className="font-light text-gray-800 dark:text-gray-200 ">
                    {b.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Flowbite>
        <div className="mx-auto">
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1onmUzKDPtiMErgbOcyuq-f8wqbYqWfVd/view"
            }
          >
            <Button disabled={false}>
              <div className="flex flex-row gap-2 items-center">
                <FaGoogleDrive />
                <p className="text-md">Read my Curriculum Vitae.</p>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
