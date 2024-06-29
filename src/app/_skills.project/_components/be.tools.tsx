import SkillLogo from "@/app/_components/skill.logo";

export default function BackEndTools() {
  return (
    <div className="h-[8rem] md:w-[10rem] md:h-[10rem] bg-gray-200 dark:bg-gray-400 rounded-lg flex flex-col items-center ">
      <p className="text-gray-700 dark:text-black md:text-sm font-thin text-center md:p-2 ">
        Back-End Tools
      </p>
      <div className="flex flex-col gap-2 items-center">
        <SkillLogo wh="80" innerwh={70} src="node-logo.svg" />
        <div className="flex flex-row gap-2">
          <SkillLogo wh="50" innerwh={40} src="express-logo.svg" />
          <SkillLogo wh="50" innerwh={36} src="mysql-logo.svg" />
          <SkillLogo wh="50" innerwh={40} src="prisma.svg" />
        </div>
      </div>
    </div>
  );
}
