import ImageGue from "./_components/homeImage";
import AboutMe from "./_about.me/about.me";
import Contacts from "./_components/navbar.dropdown";
import SkillsPage from "./_skills.project/skills";
import ProjectsPage from "./_skills.project/Projects";

export default function Home() {
  return (
    <div className="flex flex-col" id="home">
      <div className="md:px-4 flex flex-col md:flex-row gap-20 md:justify-around items-center h-[80vh] md:h-[83vh] transition-colors duration-300 ">
        <div className="md:w-[55%] w-full justify-start items-start">
          <p className="md:text-2xl text-xl font-semibold text-[#0891b2]">
            Hi! my name is
          </p>
          <p className="mt-2 text-start text-4xl md:text-6xl dark:text-white text-black font-bold">
            Hanantyo Dian Utomo
          </p>
          <ImageGue display="md:hidden block" />
          <div className="flex flex-col md:flex-row justify-between text-gray-700 md:gap-4 mt-2 md:mt-6">
            <p className=" text-nowrap text-end md:text-start md:text-wrap  md:text-2xl text-xl font-bold dark:text-gray-400 text-gray-700 md:w-[70%]">
              Full-stack Developer
            </p>
            <p className="md:text-end mt-2 md:mt-0 text-gray-800 dark:text-gray-300 font-light">
              Passionate about designing a simple, engaging websites that
              prioritize user experience. Let&apos;s collaborate on your next
              big idea!
            </p>
          </div>

          <Contacts />
        </div>
        <div className=" md:w-[47%] w-full h-full relative mb-10">
          <ImageGue display="hidden md:block" />
        </div>
      </div>
      <AboutMe />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}
