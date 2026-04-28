import useAppSelector from "@/store/hooks/useAppSelector";

export const useHeader = () => {
  const cart = useAppSelector((state) => state.cart);
  const cartCount = cart.items.length;

  const onScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { onScrollToTopClick, cartCount };
};

export default useHeader;
