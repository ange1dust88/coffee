import Link from "next/link";

import SmallHero from "../components/sections/SmallHero";
import Button from "../components/ui/button";
import HeroTitle from "../components/ui/hero-title";

import MenuSnippet from "../components/sections/MenuSnippet";

function MenuPage() {
  return (
    <div>
      <SmallHero isMarquee={true}>
        <HeroTitle>Menu</HeroTitle>
        <p className="text-primary text-lg text-center">
          Hot drinks and fresh desserts.
        </p>
        <div className="mt-6 flex flex-col w-full md:w-auto px-4 md:px-0 md:flex-row gap-2">
          <Button>
            <Link href="/locations">Our Locations</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/about-us">About us</Link>
          </Button>
        </div>
      </SmallHero>
      <MenuSnippet />
    </div>
  );
}

export default MenuPage;
