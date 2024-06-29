import Projects from "./_components/project";
import Skills from "./_components/skill";

export default function SkillsPro() {
  return (
    <div className="flex flex-col md:mt-14 mt-20" id="skill">
      <p className="text-center text-xl md:text-3xl text-gray-800 dark:text-gray-300 w-full border-b-[3px] border-gray-600 dark:border-gray-200 pb-[4px] mb-4 md:mb-8">
        Skills & Projects.
      </p>
      <div className="flex flex-col md:gap-8 gap-4 md:flex-row md:justify-around my-auto md:p-8">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
