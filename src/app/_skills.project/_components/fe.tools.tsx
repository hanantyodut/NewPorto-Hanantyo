import SkillLogo from "@/app/_components/skill.logo";

export default function FrontEndTools() {
  return (
    <div className="h-[8rem] md:h-[10rem] w-[95%] md:w-[80%] mx-auto bg-gray-200/40 dark:bg-gray-400/70 rounded-lg flex flex-col items-center justify-center ">
      <p className="text-gray-700 dark:text-black md:text-lg md:font-medium text-center md:pb-2 ">
        Front-End Development
      </p>
      <div className="md:hidden flex flex-row justify-around gap-4 items-center h-[70%]">
        <SkillLogo innerwh={70} src="next-logo.svg" name="Next JS" />
        <SkillLogo innerwh={60} src="tailwind.svg" name="Tailwind CSS" />
        <SkillLogo innerwh={60} src="react.svg" name="React JS" />
      </div>
      <div className="hidden md:flex flex-row justify-around gap-4 md:gap-10 items-center ">
        <SkillLogo innerwh={100} src="next-logo.svg" name="Next JS" />
        <SkillLogo innerwh={100} src="tailwind.svg" name="Tailwind CSS" />
        <SkillLogo innerwh={100} src="react.svg" name="React JS" />
      </div>
    </div>
  );
}
