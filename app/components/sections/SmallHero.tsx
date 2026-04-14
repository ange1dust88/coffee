import Button from "../ui/button";
import Marquee from "../ui/marquee";
interface Props {
  children: React.ReactNode;
  isMarquee: boolean;
}
function SmallHero({ children, isMarquee = true }: Props) {
  return (
    <section className="h-full">
      <div
        className={`bg-hero h-full flex flex-col justify-start items-center pt-48 overflow-hidden relative ${isMarquee ? "pb-20" : "pb-0"}`}
      >
        {children}
      </div>
      {isMarquee ? <Marquee /> : <></>}
    </section>
  );
}

export default SmallHero;
