import { FaArrowCircleDown } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <p className="text-center text-lg md:text-xl text-gray-800 dark:text-gray-300 font-light">
          Projects.
        </p>
        <FaArrowCircleDown className="fill-[#0891b2]" />
      </div>
    </div>
  );
}
