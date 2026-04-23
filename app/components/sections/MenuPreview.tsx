import MenuPreviewItem from "../ui/menu-preview-item";
import Title from "../ui/title";

function MenuPreview() {
  return (
    <section className="bg-background border-b border-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 justify-center items-center px-4">
        <Title className="text-center text-hero">
          Find and Get <br />
          What You Love
        </Title>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-16">
          <MenuPreviewItem
            img="/menu/flat-white.webp"
            title="Coffee"
            href="/menu#coffee"
          />
          <MenuPreviewItem
            img="/menu/matcha-iced-latte.jpg"
            title="Cold Drinks"
            href="/menu#cold-drinks"
          />
          <MenuPreviewItem
            img="/menu/chocolate-cake.jpg"
            title="Desserts"
            href="/menu#desserts"
          />
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
