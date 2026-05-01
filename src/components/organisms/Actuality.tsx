import { useState } from "react";
import { Description, Title } from "../atoms";
import { Cards } from "../molecules";

type Props = {
  title: string;
  description: string;
};

type ActualityItem = {
  top?: boolean;
  src: string;
  date: string;
  tag: string;
  title: string;
  descritption: string;
};

const actualities: ActualityItem[] = [
  {
    src: "/assets/images/image02.jpg",
    date: "20.01.2022",
    tag: "TAG",
    title: "Lorem ipsum dolor\ndonec sed odio.",
    descritption: "Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris...",
  },
  {
    top: true,
    src: "/assets/images/image03.jpg",
    date: "20.01.2022",
    tag: "TAG",
    title: "Lorem ipsum dolor\ndonec sed odio.",
    descritption: "Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris...",
  },
  {
    src: "/assets/images/image04.jpg",
    date: "20.01.2022",
    tag: "TAG",
    title: "Lorem ipsum dolor\ndonec sed odio.",
    descritption: "Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris...",
  },
];

export default function Actuality({ title, description }: Props) {
  const [active, setActive] = useState(-1);

  return (
    <div className="flex flex-col items-center py-16 gap-4">
      <div className="flex flex-col text-center max-w-[38rem] px-4">
        <Title text={title} />
        <Description text={description} />
      </div>
      <div className="flex flex-wrap justify-center gap-32">
        {actualities.map((item, index) => (
          <div
            key={index}
            className="h-fit w-fit flex flex-col items-center gap-8"
            onMouseOver={() => setActive(index)}
            onMouseLeave={() => setActive(-1)}
          >
            <div
              className={`bg-gradient-to-t from-pink-500 to-purple-500 transition-all duration-300 w-[1px]
                ${active === index ? "opacity-100 h-[5rem]" : "opacity-0 h-[0px]"}
              `}
            />
            <Cards
              src={item.src}
              date={item.date}
              tag={item.tag}
              title={item.title}
              descritption={item.descritption}
              active={active === index || active === -1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
