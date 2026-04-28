import { ICart } from "@/interfaces";
import { CartItem } from "@/types";

export type CartInitialState = ICart;

export type AddToCartPayloadAction = {
  item: CartItem;
};

export default CartInitialState;
