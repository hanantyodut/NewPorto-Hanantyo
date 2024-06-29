import { FaArrowCircleDown } from "react-icons/fa";
import BackEndTools from "./be.tools";
import FrontEndTools from "./fe.tools";
import GeneralTasks from "./gen.task";
import MainLanguage from "./main.lang";
import { Carousel } from "flowbite-react";

export default function Skills() {
  const components = [
    { component: <MainLanguage /> },
    { component: <GeneralTasks /> },
    { component: <FrontEndTools /> },
    { component: <BackEndTools /> },
  ];
  return (
    <div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <p className="text-center text-lg md:text-xl text-gray-800 dark:text-gray-300 font-light">
          Skills.
        </p>
        <FaArrowCircleDown className="fill-[#0891b2]" />
      </div>
      <div className="hidden md:grid grid-rows-2 gap-6 items-center mt-4">
        <div className="flex flex-row gap-6">
          <MainLanguage />
          <GeneralTasks />
        </div>

        <div className="flex flex-row gap-6">
          <FrontEndTools />
          <BackEndTools />
        </div>
      </div>
      <div className="block md:hidden mt-4 h-[10rem]">
        <Carousel slideInterval={3000}>
          {components.map((c, index) => (
            <div key={index}>{c.component}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
