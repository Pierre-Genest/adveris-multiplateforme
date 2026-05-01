import { keyFigures } from "../../data/keyFigures";
import { NumericKey, Title } from "../atoms";

type Props = {
  title: string;
};

export default function KeyBanner({ title }: Props) {
  return (
    <div className="min-h-[34rem] w-full bg-gradient-to-r from-pink-500 to-purple-500 flex flex-col items-center justify-center gap-16 py-32 px-8 text-center">
      <Title text={title} />
      <div className="flex items-center justify-center flex-wrap gap-32 px-8">
        {keyFigures.map((item, index) => (
          <div key={index}>
            <NumericKey numeric={item.numeric} text={item.text} duration={1500} />
          </div>
        ))}
      </div>
    </div>
  );
}
