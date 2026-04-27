"use client";
import React from "react";
import usePizzaGrid from "./usePizzaGrid";
import Pizza from "./pizza/Pizza";

export const PizzaGrid: React.FC = () => {
  const { pizzas, isLoading, error, onRefetchPizzasClick } = usePizzaGrid();

  const renderPizzas = pizzas.map((pizza) => (
    <Pizza pizza={pizza} key={pizza.id} />
  ));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center max-w-full w-full mt-[50px]">
        <p className="text-center text-lg font-semibold">Loading pizzas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center max-w-full w-full mt-[50px]">
        <p className="text-center text-lg font-semibold">{error}</p>
        <button
          className="cursor-pointer rounded bg-white px-[15px] py-[10px] focus:outline-none hover:bg-gray-100 text-[#0a0a0a] mt-[20px] font-semibold"
          onClick={onRefetchPizzasClick}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-full grid-cols-1 gap-[15px] px-[20px] sm:grid-cols-2 lg:grid-cols-3">
      {renderPizzas}
    </div>
  );
};

export default PizzaGrid;
