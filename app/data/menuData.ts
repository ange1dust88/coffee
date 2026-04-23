export type Category = "coffee" | "cold-drinks" | "desserts";

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
    related: ["cappuccino", "raf", "flat-white"],
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
    related: ["latte", "americano", "flat-white"],
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
    related: ["cappuccino", "espresso", "cold-brew"],
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
    related: ["latte", "cappuccino", "flat-white"],
  },

  {
    slug: "flat-white",
    title: "Flat White",
    price: 18,
    description:
      "Velvety espresso with steamed milk, known for its smooth texture and strong coffee flavor.",
    image: "/menu/flat-white.webp",
    category: "coffee",
    allergens: ["milk"],
    isNew: false,
    sizes: [
      { size: "200ml", price: 0 },
      { size: "300ml", price: +2 },
    ],
    related: ["latte", "cappuccino", "espresso"],
  },

  {
    slug: "espresso",
    title: "Espresso",
    price: 10,
    description:
      "A rich and intense shot of pure coffee, perfect for a quick boost.",
    image: "/menu/Espresso.jpg",
    category: "coffee",
    allergens: [],
    isNew: false,
    sizes: [
      { size: "single", price: 0 },
      { size: "double", price: +4 },
    ],
    related: ["americano", "latte", "tiramisu"],
  },

  {
    slug: "iced-latte",
    title: "Iced Latte",
    price: 17,
    description: "Chilled espresso with milk and ice, smooth and refreshing.",
    image: "/menu/iced-latte.jpg",
    category: "cold-drinks",
    allergens: ["milk"],
    isNew: true,
    sizes: [
      { size: "300ml", price: 0 },
      { size: "500ml", price: +3 },
    ],
    related: ["latte", "iced-cappuccino", "frappe"],
  },

  {
    slug: "iced-americano",
    title: "Iced Americano",
    price: 14,
    description: "Cold water and espresso over ice for a crisp and bold taste.",
    image: "/menu/iced-americano.jpg",
    category: "cold-drinks",
    allergens: [],
    isNew: false,
    sizes: [
      { size: "300ml", price: 0 },
      { size: "500ml", price: +2 },
    ],
    related: ["americano", "cold-brew", "iced-latte"],
  },

  {
    slug: "cheesecake",
    title: "Cheesecake",
    price: 16,
    description: "Classic creamy cheesecake with a buttery biscuit base.",
    image: "/menu/cheesecake.jpg",
    category: "desserts",
    allergens: ["milk", "gluten", "eggs"],
    isNew: false,
    sizes: [{ size: "slice", price: 0 }],
    related: ["chocolate-cake", "tiramisu", "macarons"],
  },

  {
    slug: "chocolate-cake",
    title: "Chocolate Cake",
    price: 15,
    description: "Rich and moist chocolate cake layered with smooth cream.",
    image: "/menu/chocolate-cake.jpg",
    category: "desserts",
    allergens: ["milk", "gluten", "eggs"],
    isNew: true,
    sizes: [{ size: "slice", price: 0 }],
    related: ["cheesecake", "tiramisu", "macarons"],
  },

  {
    slug: "iced-cappuccino",
    title: "Iced Cappuccino",
    price: 18,
    description:
      "Cold version of the classic cappuccino with smooth foam and refreshing taste.",
    image: "/menu/iced-cappuccino.jpg",
    category: "cold-drinks",
    allergens: ["milk"],
    isNew: false,
    sizes: [
      { size: "300ml", price: 0 },
      { size: "500ml", price: +3 },
    ],
    related: ["cappuccino", "iced-latte", "frappe"],
  },

  {
    slug: "cold-brew",
    title: "Cold Brew",
    price: 16,
    description:
      "Slow-brewed coffee served cold for a smooth, less acidic flavor.",
    image: "/menu/cold-brew.jpg",
    category: "cold-drinks",
    allergens: [],
    isNew: true,
    sizes: [
      { size: "300ml", price: 0 },
      { size: "500ml", price: +4 },
    ],
    related: ["americano", "iced-americano", "iced-latte"],
  },

  {
    slug: "matcha-iced-latte",
    title: "Iced Matcha Latte",
    price: 19,
    description: "Refreshing green tea latte with ice and creamy milk.",
    image: "/menu/matcha-iced-latte.jpg",
    category: "cold-drinks",
    allergens: ["milk"],
    isNew: false,
    sizes: [
      { size: "300ml", price: 0 },
      { size: "500ml", price: +3 },
    ],
    related: ["iced-latte", "frappe", "macarons"],
  },

  {
    slug: "frappe",
    title: "Coffee Frappe",
    price: 20,
    description:
      "Blended iced coffee drink with a creamy texture and light sweetness.",
    image: "/menu/frappe.jpg",
    category: "cold-drinks",
    allergens: ["milk"],
    isNew: true,
    sizes: [
      { size: "400ml", price: 0 },
      { size: "600ml", price: +4 },
    ],
    related: ["iced-latte", "iced-cappuccino", "matcha-iced-latte"],
  },

  {
    slug: "macarons",
    title: "Macarons Set",
    price: 18,
    description:
      "Delicate French almond cookies with creamy filling, available in assorted flavors.",
    image: "/menu/macarons.jpg",
    category: "desserts",
    allergens: ["nuts", "eggs"],
    isNew: true,
    sizes: [
      { size: "3 pcs", price: 0 },
      { size: "6 pcs", price: +10 },
    ],
    related: ["cheesecake", "tiramisu", "matcha-iced-latte"],
  },

  {
    slug: "tiramisu",
    title: "Tiramisu",
    price: 17,
    description:
      "Classic Italian dessert with layers of coffee-soaked biscuits and mascarpone cream.",
    image: "/menu/tiramisu.png",
    category: "desserts",
    allergens: ["milk", "eggs", "gluten"],
    isNew: false,
    sizes: [{ size: "portion", price: 0 }],
    related: ["latte", "espresso", "cheesecake"],
  },
];
