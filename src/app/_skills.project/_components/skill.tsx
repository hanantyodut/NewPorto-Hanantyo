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
    <div className=" mt-4 md:mt-0 h-[10rem] w-full">
      <Carousel slideInterval={4000}>
        {components.map((c, index) => (
          <div key={index}>{c.component}</div>
        ))}
      </Carousel>
    </div>
  );
}
