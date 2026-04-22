import Link from "next/link";
import Button from "../ui/button";
import HeroTitle from "../ui/hero-title";
import Marquee from "../ui/marquee";
import AnimatedCups from "../ui/animated-cups";

function Hero() {
  return (
    <section className="md:h-[130vh] h-screen ">
      <div className="bg-hero h-full flex flex-col justify-start items-center pt-48 overflow-hidden relative">
        <HeroTitle>
          Life Begins <br />
          After Coffee
        </HeroTitle>

        <p className="text-primary text-balance text-center p-0 md:px-4 text-xl mt-4">
          Because great coffee is the start of something even greater.
        </p>
        <div className="mt-6 flex flex-col w-full md:w-auto px-4 md:px-0 md:flex-row gap-2 z-3">
          <Button>
            <Link href="/menu">Explore Menu</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/locations">Our Locations</Link>
          </Button>
        </div>
        <AnimatedCups />
      </div>

      <Marquee />
    </section>
  );
}

export default Hero;
