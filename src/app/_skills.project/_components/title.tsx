type Props = {
  title: string;
  sub: string;
  no: string;
  style: string;
  style1: string;
};
export default function Title({ title, sub, no, style, style1 }: Props) {
  return (
    <div
      className={`${style}  gap-4 md:h-[3.6rem] items-center border-b-[1px] border-[#0891b2]`}
    >
      <p className="w-[35px] h-[35px] rounded-[50%] bg-[#0891b2] flex items-center justify-center text-gray-300 font-normal">
        {no}
      </p>
      <div className="flex flex-col">
        <p
          className={`text-lg md:text-xl text-gray-800 dark:text-gray-300 font-semibold ${style1}`}
        >
          {title}
        </p>
        <p
          className={`text-sm md:text-md text-gray-800 dark:text-gray-300 font-normal ${style1}`}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}
