import Nearby from "../components/sections/Nearby";
import SmallHero from "../components/sections/SmallHero";
import HeroTitle from "../components/ui/hero-title";

function Locations() {
  return (
    <div>
      <SmallHero isMarquee={false}>
        <HeroTitle>Locations</HeroTitle>
        <p className="text-primary text-lg text-center">
          Find your nearest Focusbrew locations.
        </p>
      </SmallHero>
      <Nearby isTitle={false} />
    </div>
  );
}

export default Locations;
