import Link from "next/link";

interface Props {
  img: string;
  title: string;
  price: number;
  slug: string;
}

function MenuItem({ img, title, price, slug }: Props) {
  return (
    <Link href={`/menu/${slug}`} className="group flex flex-col w-full">
      <div className="aspect-square w-full overflow-hidden rounded-3xl">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <h4 className="calistoga text-2xl md:text-xl lg:text-2xl text-hero group-hover:text-header-scroll transition-colors duration-200">
          {title}
        </h4>

        <p className="calistoga text-secondary text-2xl md:text-xl">
          {price} zł
        </p>
      </div>
    </Link>
  );
}

export default MenuItem;
