import ImageTrans from "./image.fade";
import { comproImages } from "@/app/_libs/data";
import Title from "./title";
import SkillLogo from "@/app/_components/skill.logo";
import { List } from "flowbite-react";

export default function ProjectsCompro() {
  const skillCompro = [
    {
      logo: <SkillLogo innerwh={60} src="react.svg" name="React JS" />,
    },
    {
      logo: <SkillLogo innerwh={60} src="tailwind.svg" name="Tailwind CSS" />,
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row-reverse gap-2 md:gap-16 mt-4 md:mt-0">
      <Title
        title={"Polymore"}
        sub={"Company Profile Website"}
        no={"2"}
        style="flex md:hidden pt-4 flex-row-reverse"
        style1="flex flex-row-reverse"
      />
      <ImageTrans img={comproImages} />

      <div className="flex flex-col gap-4 md:w-[55%] w-full">
        <div className="relative">
          <Title
            title={"Polymore."}
            sub={"Company Profile Website"}
            no={"2"}
            style={"hidden md:flex"}
            style1="flex md:flex-row"
          />
          <div className=" flex flex-row md:flex-row-reverse w-full gap-2 absolute top-0">
            {skillCompro.map((l, index) => (
              <div
                className="p-2 bg-gray-200 md:w-[50px] md:h-[50px] w-[35px] h-[35px] flex items-center justify-center rounded-lg"
                key={index}
              >
                {l.logo}
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row hidden">
          <div className="pr-2 border-r-[1px] border-[#0891b2] w-[38%]">
            <p className="text-gray-800 dark:text-gray-300 font-semibold text-lg">
              About Polymore.
            </p>
            <p className="text-gray-800 dark:text-gray-300 font-thin text-sm">
              &quot;Polymore is a startup turning plastic waste into stylish,
              eco-friendly furniture. We aim to reduce environmental impact and
              promote sustainable living through innovative recycling.&quot;
            </p>
          </div>
          <div className="ml-2">
            <List>
              <List.Item className="text-gray-800 dark:text-gray-300 ">
                Front-end Development
              </List.Item>
              <List ordered={false} nested>
                <List.Item>Built website on React JS and vite</List.Item>
                <List.Item>
                  Applied useContext and useReact to handle multiple changes
                  across the website
                </List.Item>
                <List.Item>
                  Utilized MaterialUI for multiple components
                </List.Item>
              </List>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
