import { PizzaCategory } from "@/enums";
import { PizzaPrice } from "@/types";

export interface IPizza {
  id: number;
  name: string;
  description: string;
  pricing: PizzaPrice[];
  categories: PizzaCategory[];
  imageUrl: string;
}

export default IPizza;
