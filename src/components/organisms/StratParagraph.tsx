import { Description, IconCta, ImageBlur, Title } from "../atoms";

type Props = {
  title: string;
  text: string;
  cta: string;
  src: string;
  alt: string;
};

export default function StratParagraph({ title, text, cta, src, alt }: Props) {
  return (
    <div className="flex items-center justify-center flex-wrap pt-[5rem] gap-[5rem] min-h-[49.5rem] px-8">
      <div className="max-w-[37.625rem] p-8">
        <Title text={title} />
        <Description text={text} />
        <div className="flex items-center gap-[2rem]">
          <div className="relative w-[5rem] h-[5rem] flex items-center justify-center">
            <IconCta />
          </div>
          <div className="font-open-sans font-normal text-[14px] leading-[24px] tracking-[7px]">
            {cta}
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-[471px] aspect-[471/672] flex items-end">
        <ImageBlur src={src} alt={alt} priority />
      </div>
    </div>
  );
}
