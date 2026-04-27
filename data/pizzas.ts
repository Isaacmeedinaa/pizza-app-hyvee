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
    imageUrl:
      "https://lilluna.com/wp-content/uploads/2025/10/margherita-pizza-resize-8-1.jpg",
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
    imageUrl:
      "https://assets-us-01.kc-usercontent.com/4353bced-f940-00d0-8c6e-13a0a4a7f5c2/2ac60829-5178-4a6e-80cf-6ca43d862cee/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg",
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
    imageUrl:
      "https://www.windingcreekranch.org/wp-content/uploads/2025/08/diavola-pizza-recipe-finished-1-of-1-11.jpg",
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
    imageUrl:
      "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg",
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
    imageUrl:
      "https://kristineskitchenblog.com/wp-content/uploads/2025/05/bbq-chicken-pizza-09-2.jpg",
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
    imageUrl:
      "https://gm8-sloopys-ggm.b-cdn.net/wp-content/uploads/2021/04/IMG_5045-scaled.jpg",
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
    imageUrl:
      "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png",
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
    imageUrl:
      "https://cookingwithcurls.com/wp-content/uploads/2015/02/Original-Shrimp-Scampi-Pizza.-cookingwithcurls.com_.jpg",
  },
];

export default pizzas;
