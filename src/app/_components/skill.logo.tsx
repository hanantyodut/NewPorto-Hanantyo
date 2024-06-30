import Image from "next/image";

type Props = { innerwh: number; src: string };
export default function SkillLogo({ innerwh, src }: Props) {
  return (
    <div className={`z-40`}>
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
