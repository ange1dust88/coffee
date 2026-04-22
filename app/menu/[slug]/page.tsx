import OrderOnline from "@/app/components/sections/OrderOnline";
import Button from "@/app/components/ui/button";
import MenuItem from "@/app/components/ui/menu-item";
import { menuItems } from "@/app/data/menuData";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MenuItemPage({ params }: Props) {
  const { slug } = await params;

  const item = menuItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-hero">
        Item not found
      </div>
    );
  }

  const relatedItems = item.related
    .map((slug) => menuItems.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <>
      <section className="bg-background border-b border-secondary">
        <div className="max-w-6xl mx-auto px-6 pt-52 flex items-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 w-full">
            <div className="w-full max-w-95 lg:sticky lg:top-32">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-square object-cover rounded-3xl"
              />
            </div>

            {/* INFO */}
            <div className="flex flex-col max-w-lg w-full">
              <h1 className="text-4xl lg:text-5xl text-hero calistoga">
                {item.title}
              </h1>

              <p className="text-secondary text-2xl mt-1 calistoga">
                {item.price} zł
              </p>

              <p className="my-4 text-lg text-hero">{item.description}</p>

              {/* SIZES */}
              <div className="py-4 border-y border-secondary">
                <p className="text-secondary text-lg calistoga">
                  Available sizes
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {item.sizes.map((size) => (
                    <div
                      key={size.size}
                      className="border-secondary bg-background-alt border text-hero text-sm rounded-sm px-2 py-1"
                    >
                      <span>
                        {size.size}
                        <span className="text-secondary">
                          {size.price > 0 && ` (+${size.price}zł)`}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ALLERGENS */}
              <div className="mt-6">
                <p className="text-secondary text-lg calistoga">
                  Allergen Risks*
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {item.allergens.map((allergen) => (
                    <div
                      key={allergen}
                      className="border-secondary bg-background-alt border text-hero rounded-sm px-2 py-1 text-sm"
                    >
                      {allergen}
                    </div>
                  ))}
                </div>

                <span className="text-secondary text-sm block mt-2">
                  * Let our team know if you have any allergies before ordering.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED SECTION */}
        <div className="w-full border-t border-secondary mt-10 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-hero calistoga text-3xl lg:text-4xl">
                You'll Love These Too
              </h3>

              <Button variant="dark">
                <Link href="/menu">Explore Menu</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedItems.map((relItem) => (
                <MenuItem
                  key={relItem!.slug}
                  img={relItem!.image}
                  title={relItem!.title}
                  price={relItem!.price}
                  slug={relItem!.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <OrderOnline />
    </>
  );
}
