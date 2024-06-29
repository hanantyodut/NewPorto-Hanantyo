import { FaArrowCircleDown } from "react-icons/fa";
import EduTab from "./edu.tab";
import ExpTabs from "./exp.tabs";
import OrgTab from "./org.tab";
import WorkTab from "./work.tab";
import CertificateTab from "./cert.tab";

export default function Experiences() {
  return (
    <div className="md:w-[60%] h-[85vh] md:h-[50vh] ">
      <div className="flex flex-row gap-4 items-center justify-center">
        <p className="text-center text-lg md:text-xl text-gray-800 dark:text-gray-300 font-light">
          Experiences.
        </p>
        <FaArrowCircleDown className="fill-[#0891b2]" />
      </div>

      <div className="mt-4">
        <ExpTabs
          tab1={<EduTab />}
          tab2={<WorkTab />}
          tab3={<OrgTab />}
          tab4={<CertificateTab />}
        />
      </div>
    </div>
  );
}
