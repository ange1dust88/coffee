import AboutUs1 from "./components/sections/AboutUs1";
import Hero from "./components/sections/Hero";
import MenuPreview from "./components/sections/MenuPreview";
import MenuSnippet from "./components/sections/MenuSnippet";
import Nearby from "./components/sections/Nearby";
import OrderOnline from "./components/sections/OrderOnline";
import Reviews from "./components/sections/Reviews";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <MenuPreview />
      <MenuSnippet />
      <AboutUs1 />
      <Reviews />
      <Nearby />
      <OrderOnline />
      <Footer />
    </div>
  );
}
