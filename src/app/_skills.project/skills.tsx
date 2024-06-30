import Skills from "./_components/skill";

export default function SkillsPage() {
  return (
    <div className="flex flex-col pt-0 md:pt-16" id="skill">
      <p className="text-center text-xl md:text-3xl text-gray-800 dark:text-gray-300 w-full border-b-[3px] border-gray-600 dark:border-gray-200 pb-[4px] mb-4 md:mb-8">
        Skills.
      </p>
      <div className="flex flex-col md:gap-8 gap-4 md:flex-row md:justify-around my-auto md:p-2">
        <Skills />
      </div>
    </div>
  );
}
