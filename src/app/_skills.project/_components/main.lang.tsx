import SkillLogo from "@/app/_components/skill.logo";

export default function MainLanguage() {
  return (
    <div className=" h-[8rem] md:w-[10rem] md:h-[10rem] bg-gray-200 dark:bg-gray-400 rounded-lg flex flex-col items-center ">
      <p className="text-gray-700 dark:text-black md:text-sm font-thin text-center md:p-2 mb-4 ">
        Main Language
      </p>
      <SkillLogo wh="130" innerwh={80} src="typescript.svg" />
    </div>
  );
}
