import ImageTrans from "./image.fade";
import { llamsImages } from "@/app/_libs/data";
import Title from "./title";
import SkillLogo from "@/app/_components/skill.logo";
import { List } from "flowbite-react";

export default function ProjectsLlams() {
  const skillLlams = [
    {
      logo: <SkillLogo innerwh={60} src="node-logo.svg" name="Node JS" />,
    },
    {
      logo: <SkillLogo innerwh={60} src="express-logo.svg" name="Express JS" />,
    },
    {
      logo: <SkillLogo innerwh={60} src="mysql.svg" name="MySql workbench" />,
    },
    {
      logo: <SkillLogo innerwh={60} src="next-logo.svg" name="Next JS" />,
    },
    {
      logo: <SkillLogo innerwh={60} src="tailwind.svg" name="Tailwind CSS" />,
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 md:gap-16">
      <Title
        title={"LLAMS."}
        sub={"Gig-type Event Ticketing Website"}
        no={"1"}
        style="flex md:hidden flex-row-reverse"
        style1="flex flex-row-reverse"
      />
      <ImageTrans img={llamsImages} />
      <div className="flex flex-col gap-4 md:w-[55%] w-full">
        <div className="relative">
          <Title
            title={"LLAMS."}
            sub={"Gig-type Event Ticketing Website"}
            no={"1"}
            style="hidden md:flex flex-row-reverse"
            style1="flex md:flex-row-reverse"
          />
          <div className=" flex flex-row gap-2 md:w-[45%] absolute top-0">
            {skillLlams.map((l, index) => (
              <div
                className="p-2 bg-gray-200 md:w-[50px] md:h-[50px] w-[35px] h-[35px]] flex items-center justify-center rounded-lg"
                key={index}
              >
                {l.logo}
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row hidden">
          <div className="pr-2 border-r-[1px] border-[#0891b2] w-[30%]">
            <p className="text-gray-800 dark:text-gray-300 font-semibold text-lg">
              About LLAMS.
            </p>
            <p className="text-gray-800 dark:text-gray-300 font-thin text-sm">
              &quot;Designed as a space for gig promoters and emerging bands,
              LLAMS brings you the latest gigs, live performances, and community
              events happening at your favorite cafes and venues.&quot;
            </p>
          </div>
          <div className="ml-2">
            <List>
              <List.Item className="text-gray-800 dark:text-gray-300 ">
                Back-end Development
                <List ordered={false} nested>
                  <List.Item>
                    Built the database model using Prisma ORM
                  </List.Item>
                  <List.Item>Built API query using Express JS</List.Item>
                  <List.Item>
                    Designed auth, transactions, and data&apos;s CRUD
                  </List.Item>
                </List>
              </List.Item>
              <List.Item className="text-gray-800 dark:text-gray-300 ">
                Front-end Development
              </List.Item>
              <List ordered={false} nested>
                <List.Item>
                  Connect the web with its database using Cors
                </List.Item>
                <List.Item>
                  Built responsive components utilizing component libraries
                </List.Item>
              </List>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
