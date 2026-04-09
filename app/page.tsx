import Hero from "./components/sections/Hero";
import MenuPreview from "./components/sections/MenuPreview";
import MenuSnippet from "./components/sections/MenuSnippet";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <MenuPreview />
      <MenuSnippet />
    </div>
  );
}
