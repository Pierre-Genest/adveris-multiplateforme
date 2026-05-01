type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function ImageBlur({ src, alt }: Props) {
  return (
    <div className="relative h-full w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 bg-[linear-gradient(270deg,#B551D9_18.63%,#D50A95_50%)] opacity-60" />
    </div>
  );
}
