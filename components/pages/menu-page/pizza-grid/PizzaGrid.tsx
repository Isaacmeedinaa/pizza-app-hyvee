"use client";
import React from "react";
import usePizzaGrid from "./usePizzaGrid";
import Pizza from "./pizza/Pizza";

export const PizzaGrid: React.FC = () => {
  const { pizzas } = usePizzaGrid();

  const renderPizzas = pizzas.map((pizza) => (
    <Pizza pizza={pizza} key={pizza.id} />
  ));

  return (
    <div className="mx-auto grid max-w-full grid-cols-1 gap-[15px] px-[20px] sm:grid-cols-2 lg:grid-cols-3">
      {renderPizzas}
    </div>
  );
};

export default PizzaGrid;
