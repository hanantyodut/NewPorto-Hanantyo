import SkillLogo from "@/app/_components/skill.logo";

export default function GeneralTasks() {
  return (
    <div className="md:w-[12rem] md:h-[12rem] bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center">
      <p className="text-gray-700 dark:text-white md:text-sm font-thin text-center md:p-2 ">
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
