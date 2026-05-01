import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PostCard } from "../molecules";

const LIMIT = 8;

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
};

type PostsResponse = {
  posts: Post[];
  total: number;
};

async function getPosts(page: number): Promise<PostsResponse> {
  const base = import.meta.env.VITE_DUMMY_URL;
  const skip = (page - 1) * LIMIT;
  const res = await fetch(`${base}/posts?limit=${LIMIT}&skip=${skip}`);
  const data = await res.json();
  return { posts: data.posts, total: data.total };
}

export default function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPosts(page).then(({ posts, total }) => {
      setPosts(posts);
      setTotal(total);
      setLoading(false);
    });
  }, [page]);

  const totalPages = Math.ceil(total / LIMIT);

  const goToPage = (p: number) => setSearchParams({ page: String(p) });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32 text-white/40 font-open-sans">
        Loading…
      </div>
    );
  }

  const WINDOW = 5;
  const half = Math.floor(WINDOW / 2);
  const start = Math.max(1, Math.min(page - half, totalPages - WINDOW + 1));
  const end = Math.min(totalPages, start + WINDOW - 1);
  const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="flex flex-col items-center gap-12 px-8 py-16">
      <div className="flex flex-wrap justify-center gap-12">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            tags={post.tags}
            views={post.views}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-4">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page <= 1}
          className={`px-3 py-2 font-open-sans text-[14px] transition-colors ${
            page <= 1 ? "pointer-events-none text-white/20" : "text-white/60 hover:text-white"
          }`}
        >
          ←
        </button>

        {pageNumbers.map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`w-9 h-9 flex items-center justify-center font-open-sans text-[14px] rounded transition-colors ${
              p === page
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages}
          className={`px-3 py-2 font-open-sans text-[14px] transition-colors ${
            page >= totalPages
              ? "pointer-events-none text-white/20"
              : "text-white/60 hover:text-white"
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}
