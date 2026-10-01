import TitleHeader from "../components/TitleHeader";

const storyMapUrl =
  "https://storymaps.arcgis.com/briefings/534e771570b9470daf769e4f782bb947";

const LiveMap = () => (
  <section id="live-map" className="section-padding scroll-mt-24">
    <div className="relative left-1/2 w-[96vw] max-w-[1920px] -translate-x-1/2">
      <TitleHeader title="Interactive StoryMap" sub="ArcGIS StoryMaps" />

      <div className="mt-12 overflow-hidden rounded-md border border-white/15 bg-black-100">
        <iframe
          className="block h-[65vh] min-h-[420px] w-full md:h-[72vh] md:min-h-[560px]"
          src={storyMapUrl}
          title="Daniel Lee's ArcGIS StoryMap briefing"
          loading="lazy"
          allow="geolocation; clipboard-write; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="mt-5 text-right">
        <a
          className="text-sm font-semibold text-white-50 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
          href={storyMapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in ArcGIS StoryMaps
        </a>
      </div>
    </div>
  </section>
);

export default LiveMap;