import { IPizza } from "@/interfaces";
import { addToCart } from "@/store";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { CartItem } from "@/types";

export const usePizza = (pizza: IPizza) => {
  const dispatch = useAppDispatch();

  const onAddToCartClick = () => {
    const cartItem: CartItem = {
      pizzaId: pizza.id,
      name: pizza.name,
      quantity: 1,
      imageUrl: pizza.imageUrl,
    };

    dispatch(addToCart({ item: cartItem }));
  };

  return {
    onAddToCartClick,
  };
};

export default usePizza;
