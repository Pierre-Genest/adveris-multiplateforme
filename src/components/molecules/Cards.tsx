import { IconCta, ImageBlur } from "../atoms";

type Props = {
  src: string;
  date: string;
  tag: string;
  title: string;
  descritption: string;
  active: boolean;
};

export default function Cards({ src, date, tag, title, descritption, active }: Props) {
  return (
    <div className="relative flex flex-col gap-4 w-[19.125rem] max-w-[100%] h-fit">
      <div
        className={`w-full aspect-[306/436.54] transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-[40%]"
        }`}
      >
        <ImageBlur src={src} alt="card image" />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="font-open-sans font-light text-[14px] leading-[24px] tracking-[2px]">
          {date} - {tag}
        </div>
        <div className="font-grotesque font-medium text-[40px] leading-[33px] tracking-[0px] bg-gradient-to-t from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {title}
        </div>
        <div className="font-open-sans font-light text-[16px] leading-[24px] tracking-[0px]">
          {descritption}
        </div>
      </div>
      <div className="relative w-[99px] h-[103px] flex items-center justify-center">
        <IconCta />
      </div>
    </div>
  );
}
