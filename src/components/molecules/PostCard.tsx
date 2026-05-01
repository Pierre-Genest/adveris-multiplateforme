import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
};

export default function PostCard({ id, title, body, tags, views }: Props) {
  return (
    <Link to={`/articles/${id}`} className="flex flex-col gap-3 max-w-[20rem] group">
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-open-sans text-[12px] leading-[18px] px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="font-grotesque font-medium text-[24px] leading-[28px] text-white group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all">
        {title}
      </div>
      <div className="font-open-sans font-light text-[14px] leading-[22px] text-white/70 line-clamp-3">
        {body}
      </div>
      <div className="font-open-sans text-[12px] text-white/40">{views} views</div>
    </Link>
  );
}
