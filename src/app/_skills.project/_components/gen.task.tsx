import SkillLogo from "@/app/_components/skill.logo";

export default function GeneralTasks() {
  return (
    <div className="h-[8rem] md:h-[10rem] w-[95%] md:w-[80%] mx-auto bg-gray-200/40 dark:bg-gray-400/70 rounded-lg flex flex-col items-center justify-center ">
      <p className="text-gray-700 dark:text-black md:text-lg md:font-medium text-center md:pb-2 ">
        General Tasks
      </p>
      <div className="md:hidden flex flex-row justify-around gap-4 items-center h-[70%]">
        <SkillLogo innerwh={70} src="word-logo.svg" name="Microsoft Word" />
        <SkillLogo innerwh={70} src="excel-logo.svg" name="Microsoft Excel" />
        <SkillLogo
          innerwh={70}
          src="powerpoint-logo.svg"
          name="Microsoft Powerpoint"
        />
      </div>
      <div className="hidden md:flex flex-row justify-around gap-4 md:gap-10 items-center ">
        <SkillLogo innerwh={100} src="word-logo.svg" name="Microsoft Word" />
        <SkillLogo innerwh={100} src="excel-logo.svg" name="Microsoft Excel" />
        <SkillLogo
          innerwh={100}
          src="powerpoint-logo.svg"
          name="Microsoft Powerpoint"
        />
      </div>
    </div>
  );
}
