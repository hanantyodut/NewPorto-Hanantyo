import Image from "next/image";

type Props = { wh: string; innerwh: number; src: string };
export default function SkillLogo({ wh, innerwh, src }: Props) {
  return (
    <div
      className={` w-[${wh}px] h-[${wh}px] bg-gray-400 dark:bg-gray-100 rounded-[50%] z-40`}
    >
      <Image
        src={`/assets/${src}`}
        alt={"lala"}
        width={innerwh}
        height={innerwh}
        className="mx-auto h-full "
      />
    </div>
  );
}
