type Props = {
  text: string;
};

export default function Description({ text }: Props) {
  return (
    <div className="font-open-sans font-light text-[16px] leading-[24px] tracking-[0px] pb-16">
      {text}
    </div>
  );
}
