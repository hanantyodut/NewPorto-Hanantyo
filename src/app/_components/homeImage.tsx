import clsx from "clsx";
import Image from "next/image";

type Props = { display: string };
export default function ImageGue({ display }: Props) {
  return (
    <div
      className={clsx(
        "relative md:h-[80%] h-[110%] border-black dark:border-gray-400 border-b-[3px]",
        `${display}`,
      )}
    >
      <Image
        src="/assets/home-photo.png"
        alt={"me-photo"}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  );
}
