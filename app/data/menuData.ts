export type Category = "coffee" | "cold drinks" | "desserts";

export interface MenuSize {
  size: string;
  price: number;
}

export interface MenuItemType {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: Category;
  allergens: string[];
  isNew: boolean;
  sizes: MenuSize[];
  related: string[];
}

export const menuItems: MenuItemType[] = [
  {
    slug: "latte",
    title: "Latte",
    price: 15,
    description:
      "Smooth espresso with steamed milk and a light layer of foam. Perfect for a soft and creamy coffee experience.",
    image: "/menu/latte.jpeg",
    category: "coffee",
    allergens: ["milk"],
    isNew: false,

    sizes: [
      { size: "200", price: 0 },
      { size: "300ml", price: +2 },
      { size: "500ml", price: +5 },
    ],

    related: ["cappuccino", "raf"],
  },

  {
    slug: "cappuccino",
    title: "Cappuccino",
    price: 17,
    description:
      "Classic Italian coffee made with espresso, steamed milk, and thick milk foam.",
    image: "/menu/cappuccino.webp",
    category: "coffee",
    allergens: ["Milk"],
    isNew: false,

    sizes: [
      { size: "200ml", price: 0 },
      { size: "250ml", price: +2 },
      { size: "400ml", price: +5 },
    ],

    related: ["latte", "americano"],
  },

  {
    slug: "americano",
    title: "Americano",
    price: 12,
    description:
      "Espresso diluted with hot water for a smooth and rich black coffee taste.",
    image: "/menu/americano.jpg",
    category: "coffee",
    allergens: ["Soy", "Nuts"],
    isNew: false,

    sizes: [
      { size: "200ml", price: 0 },
      { size: "300ml", price: +2 },
    ],

    related: ["cappuccino"],
  },

  {
    slug: "raf",
    title: "Raf Coffee",
    price: 20,
    description:
      "Creamy coffee drink made with espresso, cream, and vanilla sugar whipped together.",
    image: "/menu/raf.jpeg",
    category: "coffee",
    allergens: ["Milk", "Soy", "Nuts"],
    isNew: true,

    sizes: [
      { size: "250ml", price: 0 },
      { size: "350ml", price: +3 },
    ],

    related: ["latte", "cappuccino"],
  },
];
