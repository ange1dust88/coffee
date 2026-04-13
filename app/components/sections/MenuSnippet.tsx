import Button from "../ui/button";
import MenuItem from "../ui/menu-item";
import Title from "../ui/title";

function MenuSnippet() {
  return (
    <section className="bg-background-alt border-b border-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Title className="text-center text-hero">Loved by Locals</Title>
          <p className="text-hero text-lg">
            Locals go-to's everyone loves - handpicked always fresh
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-0 px-6">
          <MenuItem img={"/menu/latte.jpeg"} title={"Latte"} price={15} />
          <MenuItem
            img={"/menu/cappuccino.webp"}
            title={"Cappuccino"}
            price={17}
          />
          <MenuItem
            img={"/menu/americano.jpg"}
            title={"Americano"}
            price={12}
          />
          <MenuItem img={"/menu/raf.jpeg"} title={"Raf"} price={20} />
        </div>

        <Button variant="dark">Explore Menu</Button>
      </div>
    </section>
  );
}

export default MenuSnippet;
