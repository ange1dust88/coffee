import Reviews from "../components/sections/Reviews";
import SmallHero from "../components/sections/SmallHero";
import HeroTitle from "../components/ui/hero-title";

function ReviewsPage() {
  return (
    <div>
      <SmallHero isMarquee={true}>
        <HeroTitle>Reviews</HeroTitle>
        <p className="text-primary text-lg text-center">
          What people think about us.
        </p>
      </SmallHero>
      <Reviews isTitle={false} />
    </div>
  );
}

export default ReviewsPage;
