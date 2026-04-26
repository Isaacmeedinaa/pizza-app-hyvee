import { PizzaCategory, PizzaSize } from "@/enums";
import { IPizza } from "@/interfaces";

export const pizzas: IPizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Tomato sauce, fresh mozzarella, basil, and olive oil.",
    pricing: [
      { size: PizzaSize.SMALL, price: 9.99 },
      { size: PizzaSize.MEDIUM, price: 12.99 },
      { size: PizzaSize.LARGE, price: 15.99 },
      { size: PizzaSize.EXTRA_LARGE, price: 18.99 },
    ],
    categories: [PizzaCategory.VEGETARIAN, PizzaCategory.CLASSIC],
    imageUrl: "/images/pizzas/margherita.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Classic tomato sauce, mozzarella, and crispy pepperoni.",
    pricing: [
      { size: PizzaSize.SMALL, price: 10.99 },
      { size: PizzaSize.MEDIUM, price: 13.99 },
      { size: PizzaSize.LARGE, price: 16.99 },
      { size: PizzaSize.EXTRA_LARGE, price: 19.99 },
    ],
    categories: [PizzaCategory.MEAT, PizzaCategory.CLASSIC],
    imageUrl: "/images/pizzas/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Diavola",
    description:
      "Spicy salami, chili flakes, mozzarella, and rich tomato sauce.",
    pricing: [
      { size: PizzaSize.SMALL, price: 11.99 },
      { size: PizzaSize.MEDIUM, price: 14.99 },
      { size: PizzaSize.LARGE, price: 17.99 },
      { size: PizzaSize.EXTRA_LARGE, price: 20.99 },
    ],
    categories: [PizzaCategory.MEAT, PizzaCategory.SPICY],
    imageUrl: "/images/pizzas/diavola.jpg",
  },
  {
    id: 4,
    name: "Four Cheese",
    description:
      "Mozzarella, parmesan, ricotta, and gorgonzola on a garlic cream base.",
    pricing: [
      { size: PizzaSize.SMALL, price: 10.99 },
      { size: PizzaSize.MEDIUM, price: 13.99 },
      { size: PizzaSize.LARGE, price: 16.99 },
      { size: PizzaSize.EXTRA_LARGE, price: 19.99 },
    ],
    categories: [PizzaCategory.VEGETARIAN, PizzaCategory.CLASSIC],
    imageUrl: "/images/pizzas/four-cheese.jpg",
  },
  {
    id: 5,
    name: "BBQ Chicken",
    description:
      "Grilled chicken, red onions, mozzarella, cilantro, and smoky BBQ sauce.",
    pricing: [
      { size: PizzaSize.SMALL, price: 11.99 },
      { size: PizzaSize.MEDIUM, price: 14.99 },
      { size: PizzaSize.LARGE, price: 18.49 },
      { size: PizzaSize.EXTRA_LARGE, price: 21.49 },
    ],
    categories: [PizzaCategory.MEAT],
    imageUrl: "/images/pizzas/bbq-chicken.jpg",
  },
  {
    id: 6,
    name: "Veggie Garden",
    description:
      "Bell peppers, mushrooms, red onions, black olives, tomatoes, and mozzarella.",
    pricing: [
      { size: PizzaSize.SMALL, price: 10.49 },
      { size: PizzaSize.MEDIUM, price: 13.49 },
      { size: PizzaSize.LARGE, price: 16.49 },
      { size: PizzaSize.EXTRA_LARGE, price: 19.49 },
    ],
    categories: [PizzaCategory.VEGETARIAN],
    imageUrl: "/images/pizzas/veggie-garden.jpg",
  },
  {
    id: 7,
    name: "Vegan Supreme",
    description:
      "Vegan cheese, mushrooms, peppers, onions, spinach, and tomato sauce.",
    pricing: [
      { size: PizzaSize.SMALL, price: 11.49 },
      { size: PizzaSize.MEDIUM, price: 14.49 },
      { size: PizzaSize.LARGE, price: 17.49 },
      { size: PizzaSize.EXTRA_LARGE, price: 20.49 },
    ],
    categories: [PizzaCategory.VEGAN],
    imageUrl: "/images/pizzas/vegan-supreme.jpg",
  },
  {
    id: 8,
    name: "Shrimp Scampi",
    description:
      "Garlic shrimp, mozzarella, parsley, lemon zest, and olive oil.",
    pricing: [
      { size: PizzaSize.SMALL, price: 12.99 },
      { size: PizzaSize.MEDIUM, price: 16.99 },
      { size: PizzaSize.LARGE, price: 20.99 },
      { size: PizzaSize.EXTRA_LARGE, price: 24.99 },
    ],
    categories: [PizzaCategory.SEAFOOD],
    imageUrl: "/images/pizzas/shrimp-scampi.jpg",
  },
];

export default pizzas;
