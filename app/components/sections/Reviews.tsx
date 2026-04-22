import Link from "next/link";
import Button from "../ui/button";
import Title from "../ui/title";

interface Props {
  isTitle: boolean;
}

function Reviews({ isTitle = true }: Props) {
  return (
    <section className="bg-background  py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 items-center px-4">
        {isTitle ? (
          <Title className="text-center text-hero">
            What People <br />
            Love About Us
          </Title>
        ) : (
          <></>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          <div className="flex flex-col gap-6 h-full">
            <div className="rounded-3xl bg-background-alt p-6 border border-secondary flex-1 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 h-8 text-hero"
                fill="currentColor"
              >
                <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
              </svg>

              <p className="text-hero calistoga my-4 flex-1">
                The espresso here is on another level — rich, smooth, and
                perfectly balanced. I come here every morning before work and it
                never disappoints.
              </p>

              <span className="text-hero/80 text-sm">Emily R.</span>
            </div>

            <img
              src="about-us/img4.png"
              alt="review 1"
              className="rounded-3xl w-full h-80 object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 h-full">
            <img
              src="about-us/img2.webp"
              alt="review 2"
              className="rounded-3xl w-full h-80 object-cover"
            />

            <div className="rounded-3xl bg-background-alt p-6 border border-secondary flex-1 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 h-8 text-hero"
                fill="currentColor"
              >
                <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
              </svg>

              <p className="text-hero calistoga my-4 flex-1">
                Cozy atmosphere, friendly staff, and amazing pastries. It’s the
                perfect place to relax or get some work done. The vibe is just
                perfect.
              </p>

              <span className="text-hero/80 text-sm">Daniel K.</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full">
            <div className="rounded-3xl bg-background-alt p-6 border border-secondary flex-1 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-8 h-8 text-hero"
                fill="currentColor"
              >
                <path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z" />
              </svg>

              <p className="text-hero calistoga my-4 flex-1">
                Best coffee in the city, hands down. Every cup tastes like it
                was made with care. I also love their seasonal drinks.
              </p>

              <span className="text-hero/80 text-sm">Michael T.</span>
            </div>

            <img
              src="about-us/img5.jpg"
              alt="review 3"
              className="rounded-3xl w-full h-80 object-cover"
            />
          </div>
        </div>
        {isTitle ? (
          <Button variant="dark">
            {" "}
            <Link href="/locations">Our Locations</Link>
          </Button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Reviews;
