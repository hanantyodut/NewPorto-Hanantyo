import ImageTrans from "./_components/image.fade";
import ProjectsCompro from "./_components/project.compro";
import ProjectsLlams from "./_components/project.llams";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col pt-0 md:pt-16" id="project">
      <p className="text-center text-xl md:text-3xl text-gray-800 dark:text-gray-300 w-full border-b-[3px] border-gray-600 dark:border-gray-200 pb-[4px] mb-4 md:mb-8">
        Projects.
      </p>
      <div className="flex flex-col md:gap-10 gap-7">
        <ProjectsLlams />
        <ProjectsCompro />
      </div>
    </div>
  );
}
