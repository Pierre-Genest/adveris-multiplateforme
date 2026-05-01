import { Link } from "react-router-dom";
import { BottomRules, PostList, Title, TrackMount } from "../components";

export default function Articles() {
  return (
    <div className="relative">
      <TrackMount goal="services_article" props={{ page: 1 }} />
      <div className="relative z-2 bg-[#020017] min-h-screen py-[2rem]">
        <div className="flex flex-col items-center gap-4 px-4 pb-8 text-center text-white">
          <Link
            to="/home"
            className="font-open-sans text-[14px] text-white/50 hover:text-white transition-colors self-start ml-8"
          >
            ← Accueil
          </Link>
          <Title text="Articles" />
        </div>
        <PostList />
        <BottomRules
          company="my.podcast 2022"
          text="Maquette réalisé par Adveris dans le cadre d'un exercice d'intégration web"
        />
      </div>
    </div>
  );
}
