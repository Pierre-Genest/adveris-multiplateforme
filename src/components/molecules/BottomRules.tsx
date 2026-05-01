type Props = {
  company: string;
  text: string;
};

export default function BottomRules({ company, text }: Props) {
  return (
    <div className="w-full bg-[#020017] py-8 px-4 text-center text-white border-t border-white/10 font-open-sans font-light text-[16px] leading-[24px] tracking-[0px]">
      <span>
        © <strong className="font-bold">{company}</strong> - {text}
      </span>
    </div>
  );
}
