import SkillLogo from "@/app/_components/skill.logo";

export default function MainLanguage() {
  return (
    <div className="h-[8rem] md:h-[10rem] w-[95%] md:w-[80%] mx-auto bg-gray-200/40 dark:bg-gray-400/70 rounded-lg flex flex-col items-center justify-center ">
      <p className="text-gray-700 dark:text-black md:text-lg md:font-medium text-center md:pb-2 ">
        Main Language
      </p>
      <SkillLogo innerwh={100} src="typescript.svg" />
    </div>
  );
}
