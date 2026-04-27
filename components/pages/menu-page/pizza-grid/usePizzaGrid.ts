import { useEffect, useState } from "react";
import { IPizza } from "@/interfaces";
import { API } from "@/services";

export const usePizzaGrid = () => {
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await API.getPizzas();

        const pizzaData = response.data.data.pizzas;

        setPizzas(pizzaData);
      } catch {
        setError("Failed to fetch pizzas");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  const onRefetchPizzasClick = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await API.getPizzas();

      const pizzaData = response.data.data.pizzas;

      setPizzas(pizzaData);
    } catch {
      setError("Failed to fetch pizzas");
    } finally {
      setIsLoading(false);
    }
  };

  return { pizzas, isLoading, error, onRefetchPizzasClick };
};

export default usePizzaGrid;
