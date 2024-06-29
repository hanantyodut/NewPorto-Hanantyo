import SkillLogo from "@/app/_components/skill.logo";

export default function FrontEndTools() {
  return (
    <div className="md:w-[12rem] md:h-[12rem] bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center">
      <p className="text-gray-700 dark:text-white md:text-sm font-thin text-center md:p-2 ">
        Front-End Tools
      </p>
      <div className="flex flex-row gap-2 mt-4 items-center">
        <SkillLogo wh="80" innerwh={70} src="next-logo.svg" />
        <div className="flex flex-col gap-2">
          <SkillLogo wh="50" innerwh={40} src="tailwind.svg" />
          <SkillLogo wh="50" innerwh={40} src="react.svg" />
        </div>
      </div>
    </div>
  );
}
