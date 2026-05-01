type Props = {
  text: string;
  boldText: string;
  src: string;
  alt: string;
};

export default function HeroImage({ text, boldText, src, alt }: Props) {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center">
      <div className="absolute h-full w-full z-10 top-0 left-0">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="font-grotesque font-normal text-[5rem] leading-[5.5rem] text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-20 px-4 relative">
        {text}
        <br />
        <span className="font-semibold">{boldText}</span>
      </div>
    </div>
  );
}
