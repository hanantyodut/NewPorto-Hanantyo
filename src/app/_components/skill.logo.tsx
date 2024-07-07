import { Popover } from "flowbite-react";
import Image from "next/image";

type Props = { innerwh: number; src: string; name: string };
export default function SkillLogo({ innerwh, src, name }: Props) {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
      </div>
    </div>
  );
  return (
    <div className={``}>
      <Popover content={content} trigger="hover" placement="bottom">
        <Image
          src={`/assets/${src}`}
          alt={"lala"}
          width={innerwh}
          height={innerwh}
          className="mx-auto h-full "
        />
      </Popover>
    </div>
  );
}
