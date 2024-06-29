import SkillLogo from "@/app/_components/skill.logo";

export default function GeneralTasks() {
  return (
    <div className="h-[8rem] md:w-[10rem] md:h-[10rem] bg-gray-200 dark:bg-gray-400 rounded-lg flex flex-col items-center ">
      <p className="text-gray-700 dark:text-black md:text-sm font-thin text-center md:p-2 mb-4">
        General Tasks
      </p>
      <div className="flex flex-col items-center">
        <SkillLogo wh="70" innerwh={40} src="word-logo.svg" />
        <div className="flex flex-row gap-2">
          <SkillLogo wh="70" innerwh={40} src="excel-logo.svg" />
          <SkillLogo wh="70" innerwh={40} src="powerpoint-logo.svg" />
        </div>
      </div>
    </div>
  );
}
