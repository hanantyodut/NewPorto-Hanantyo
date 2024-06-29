import SkillLogo from "@/app/_components/skill.logo";

export default function MainLanguage() {
  return (
    <div className="md:w-[12rem] md:h-[12rem] bg-gray-200 dark:bg-gray-800 rounded-lg flex flex-col items-center">
      <p className="text-gray-700 dark:text-white md:text-sm font-thin text-center md:p-2 ">
        Main Language
      </p>
      <SkillLogo wh="130" innerwh={80} src="typescript.svg" />
    </div>
  );
}
