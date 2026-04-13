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
          <MenuPreviewItem img="coffee.jpg" title="Coffee" />
          <MenuPreviewItem img="cold.jpg" title="Cold Drinks" />
          <MenuPreviewItem img="desserts.jpg" title="Desserts" />
        </div>
      </div>
    </section>
  );
}

export default MenuPreview;
