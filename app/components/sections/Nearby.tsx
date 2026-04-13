import Button from "../ui/button";
import Title from "../ui/title";

function Nearby() {
  return (
    <section className="bg-hero py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 items-center px-4">
        <div className="flex flex-col gap-4  md:text-left text-background">
          <Title className="text-background text-center">Nearby Cafés</Title>

          <p className="text-background text-center text-base  md:mx-0 text-balance">
            Find a Brewhaus nearby and stop in for your favorite drink.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nearby;
