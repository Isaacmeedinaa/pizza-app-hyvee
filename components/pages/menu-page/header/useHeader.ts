export const useHeader = () => {
  const onScrollToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { onScrollToTopClick };
};

export default useHeader;
