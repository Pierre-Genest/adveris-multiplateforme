type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  return (
    <div className="font-grotesque font-medium text-[4rem] leading-[4.25rem] tracking-[0px] pb-4">
      {text}
    </div>
  );
}
