import Link from "next/link";

interface Props {
  img: string;
  title: string;
}

function MenuPreviewItem({ img, title }: Props) {
  return (
    <Link
      href="/"
      className="flex flex-row md:flex-col items-center gap-4 md:gap-6 group"
    >
      <div className="h-[clamp(150px,22vw,280px)] w-[clamp(150px,22vw,280px)] rounded-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h4 className="calistoga text-2xl md:text-3xl lg:text-4xl text-hero group-hover:text-header-scroll transition-colors duration-300">
        {title}
      </h4>
    </Link>
  );
}

export default MenuPreviewItem;
