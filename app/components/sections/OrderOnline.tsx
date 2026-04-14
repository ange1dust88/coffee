import Marquee from "../ui/marquee";
import Title from "../ui/title";

function OrderOnline() {
  return (
    <section className="bg-background-alt  py-20 md:py-32 border-t border-secondary">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="h-12 w-12 text-hero"
          fill="currentColor"
        >
          <path d="M576 96C576 204.1 499.4 294.3 397.6 315.4C389.7 257.3 363.6 205 325.1 164.5C365.2 104 433.9 64 512 64L544 64C561.7 64 576 78.3 576 96zM64 160C64 142.3 78.3 128 96 128L128 128C251.7 128 352 228.3 352 352L352 544C352 561.7 337.7 576 320 576C302.3 576 288 561.7 288 544L288 384C164.3 384 64 283.7 64 160z" />
        </svg>
        <h5 className="text-hero calistoga text-3xl my-2">Order Online</h5>
        <p className="text-hero text-base">
          Get your favourites delivered fast.
        </p>

        <div className="flex justify-center items-center gap-3 mt-8">
          <button className="bg-hero p-4 rounded-lg cursor-pointer transition-all group duration-300 hover:bg-header-scroll">
            <img
              src="/logos/Uber_Eats_2020_logo.png"
              alt="Uber Eats"
              className="h-8 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </button>

          <button className="bg-hero p-4 rounded-lg cursor-pointer transition-all group duration-300 hover:bg-header-scroll">
            <img
              src="/logos/glovoapp_logo_icon_169104.png"
              alt="Glovo"
              className="h-8 w-8 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </button>

          <button className="bg-hero p-4 rounded-lg cursor-pointer transition-all group duration-300 hover:bg-header-scroll">
            <img
              src="/logos/grubhub.png"
              alt="Grubhub"
              className="h-8 w-8 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderOnline;
