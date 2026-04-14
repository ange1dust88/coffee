import Link from "next/link";
import Marquee from "./marquee";
import Image from "next/image";
import BottomBar from "./bottom-bar";

function Footer() {
  return (
    <div className="min-h-[75vh] bg-hero flex flex-col justify-between">
      <Marquee />

      <footer className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* LOGO + CONTACT */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <Link
                href="/"
                className="group bg-primary rounded-full h-12 w-12 flex items-center justify-center overflow-hidden"
              >
                <span className="relative h-12 w-12 flex justify-center items-center">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:-translate-y-full">
                    <Image
                      src="/logo-semibold.png"
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-400 ease-[cubic-bezier(.22,.61,.36,1)] group-hover:translate-y-0">
                    <Image
                      src="/logo-semibold.png"
                      alt="Logo"
                      width={32}
                      height={32}
                    />
                  </span>
                </span>
              </Link>

              <h5 className="text-background text-xl calistoga">
                Life Begins <br /> After Coffee
              </h5>

              <a
                href="mailto:hello@focusbrew.com"
                className="flex text-background gap-2 items-center hover:text-background/80 transition"
              >
                <span className="text-base calistoga break-all">
                  hello@focusbrew.com
                </span>
              </a>

              <a
                href="tel:+48987654321"
                className="flex text-background gap-2 items-center hover:text-background/80 transition"
              >
                <span className="text-base calistoga">+48 987 654 321</span>
              </a>
            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col text-background">
              <h4 className="text-sm mb-4">Main</h4>
              <nav className="flex flex-col gap-2">
                <Link href="" className="calistoga">
                  Menu
                </Link>
                <Link href="" className="calistoga">
                  Locations
                </Link>
                <Link href="" className="calistoga">
                  About Us
                </Link>
                <Link href="" className="calistoga">
                  Reviews
                </Link>
              </nav>
            </div>

            {/* CATEGORIES */}
            <div className="flex flex-col text-background">
              <h4 className="text-sm mb-4">Categories</h4>
              <nav className="flex flex-col gap-2">
                <Link href="" className="calistoga">
                  Coffee
                </Link>
                <Link href="" className="calistoga">
                  Cold Drinks
                </Link>
                <Link href="" className="calistoga">
                  Desserts
                </Link>
              </nav>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col text-background">
              <h4 className="text-sm mb-4">Follow Us</h4>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="bg-background p-2 rounded-[50%] transition-all duration-300 hover:opacity-80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-6 w-6 text-hero"
                    fill="currentColor "
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="bg-background p-2 rounded-[50%] transition-all duration-300 hover:opacity-80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    className="h-6 w-6 text-hero"
                    fill="currentColor "
                  >
                    <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="bg-background p-2 rounded-[50%] transition-all duration-300 hover:opacity-80"
                >
                  <svg
                    xmlns="https://x.com/"
                    viewBox="0 0 640 640"
                    className="h-6 w-6 text-hero"
                    fill="currentColor "
                  >
                    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* BIG TEXT */}
          <h3 className="text-background w-full  lg:text-left text-[13vw] leading-none calistoga">
            Focusbrew
          </h3>
        </div>
      </footer>

      {/* BOTTOM BAR */}
      <BottomBar />
    </div>
  );
}

export default Footer;
