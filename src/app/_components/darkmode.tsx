import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Button, Flowbite } from "flowbite-react";
import { buttonItemTheme } from "../_libs/flowbite.theme";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Flowbite theme={{ theme: buttonItemTheme }}>
      <Button
        className=" dark:text-white text-black"
        onClick={handleDarkMode}
        color="primary"
      >
        <span className="mx-auto">
          {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </span>
      </Button>
    </Flowbite>
  );
};
