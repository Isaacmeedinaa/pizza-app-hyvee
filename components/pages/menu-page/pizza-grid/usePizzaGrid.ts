import { useEffect, useState } from "react";
import { IPizza } from "@/interfaces";
import { pizzas as PizzasData } from "@/data/pizzas";

export const usePizzaGrid = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>(PizzasData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // const fetchPizzas = () => {
  //   setIsLoading(true);

  //   const response = PizzasData;

  //   setPizzas(response);

  //   setIsLoading(false);
  // };

  useEffect(() => {
    // fetchPizzas();
  }, []);

  return { pizzas, isLoading, error };
};

export default usePizzaGrid;
