import { Link } from "react-router-dom";
import {
  Actuality,
  Banner,
  BottomRules,
  HeroImage,
  KeyBanner,
  StratParagraph,
  TrackVisible,
} from "../components";

export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <TrackVisible
        goal="service_home"
        props={{ section: "hero" }}
        className="relative h-[100dvh] w-full z-1"
      >
        <div className="fixed h-full w-full">
          <HeroImage
            text="Les meilleurs podcasts"
            boldText="de musique"
            alt="music time"
            src="/assets/images/hero.jpg"
          />
        </div>
        <Link
          to="/articles"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-open-sans font-normal text-[14px] tracking-[4px] uppercase rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Voir les articles
        </Link>
      </TrackVisible>
      <div className="relative z-2 bg-[#020017]">
        <TrackVisible goal="service_home" props={{ section: "strate_paragraph" }}>
          <StratParagraph
            title={"Lorem ipsum dolor\ndonec sed odio."}
            text="Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo."
            cta="DÉCOUVRIR"
            src="/assets/images/image01.jpg"
            alt="happy music"
          />
        </TrackVisible>
        <TrackVisible goal="service_home" props={{ section: "actuality" }}>
          <Actuality
            title={"Lorem ipsum dolor\ndonec sed odio."}
            description="Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
          />
        </TrackVisible>
        <TrackVisible goal="service_home" props={{ section: "key_figures" }}>
          <KeyBanner title="Nos Chiffre clés" />
        </TrackVisible>
        <BottomRules
          company="my.podcast 2022"
          text="Maquette réalisé par Adveris dans le cadre d'un exercice d'intégration web"
        />
      </div>
    </div>
  );
}
