import AboutUs1 from "../components/sections/AboutUs1";

import OrderOnline from "../components/sections/OrderOnline";
import SmallHero from "../components/sections/SmallHero";
import HeroTitle from "../components/ui/hero-title";

function AboutUsPage() {
  return (
    <div>
      <SmallHero isMarquee={true}>
        <HeroTitle>About Us</HeroTitle>
        <p className="text-primary text-lg text-center">Learn who we are.</p>
      </SmallHero>
      <AboutUs1 />
      <OrderOnline />
    </div>
  );
}

export default AboutUsPage;
