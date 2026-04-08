import Button from "../ui/button";
import Marquee from "../ui/marquee";

function Hero() {
  return (
    <section className="md:h-[130vh]  h-screen ">
      <div className="bg-hero h-full flex flex-col justify-start items-center pt-48 overflow-hidden relative">
        <h1 className="calistoga text-center text-primary text-6xl md:text-8xl text-balance lg:leading-26">
          Life Begins <br />
          After Coffee
        </h1>
        <p className="text-primary text-balance text-center p-0 md:px-4 text-xl mt-4">
          Because great coffee is the start of something even greater.
        </p>
        <div className="mt-6 flex flex-col w-full md:w-auto px-4 md:px-0 md:flex-row gap-2">
          <Button>Explore Menu</Button>
          <Button variant="secondary">Our Locations</Button>
        </div>
        <div className="absolute -bottom-10 left-0 w-full flex justify-center items-end px-4 pointer-events-none">
          <img
            src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
            alt=""
            className="h-[clamp(180px,55vh,560px)] -rotate-12 translate-y-20 md:flex hidden"
          />

          <img
            src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
            alt=""
            className="md:h-[clamp(280px,70vh,620px)] translate-y-15 h-[55vh]"
          />

          <img
            src="Plastic_Coffee_Cup_PNG_Clipart_Image.png"
            alt=""
            className="h-[clamp(180px,55vh,560px)] rotate-12 translate-y-20 md:flex hidden"
          />
        </div>
      </div>

      <Marquee />
    </section>
  );
}

export default Hero;
