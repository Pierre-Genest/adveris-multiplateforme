import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Banner, BottomRules, TrackMount } from "../components";

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  reactions: { likes: number; dislikes: number };
};

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`${import.meta.env.VITE_DUMMY_URL}/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then(setPost)
      .catch(() => navigate("/articles", { replace: true }))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  return (
    <div className="relative">
      {post && <TrackMount goal="services_article" props={{ article_id: post.id }} />}
      <Banner />
      <div className="relative z-2 bg-[#020017] min-h-screen pt-[8rem] pb-0">
        {loading ? (
          <div className="flex items-center justify-center py-32 text-white/40 font-open-sans">
            Loading…
          </div>
        ) : post ? (
          <div className="max-w-[48rem] mx-auto px-8 py-16 flex flex-col gap-8">
            <Link
              to="/articles"
              className="font-open-sans text-[14px] text-white/50 hover:text-white transition-colors w-fit"
            >
              ← Back to articles
            </Link>

            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-open-sans text-[12px] px-2 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-grotesque font-medium text-[48px] leading-[52px] text-white">
              {post.title}
            </h1>

            <p className="font-open-sans font-light text-[16px] leading-[28px] text-white/80">
              {post.body}
            </p>

            <div className="flex gap-6 font-open-sans text-[14px] text-white/40">
              <span>{post.views} views</span>
              <span>👍 {post.reactions.likes}</span>
              <span>👎 {post.reactions.dislikes}</span>
            </div>
          </div>
        ) : null}

        <BottomRules
          company="my.podcast 2022"
          text="Maquette réalisé par Adveris dans le cadre d'un exercice d'intégration web"
        />
      </div>
    </div>
  );
}
