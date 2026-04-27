"use client";

import React from "react";
import IPizza from "@/interfaces/IPizza";
import Image from "next/image";

interface IPizzaProps {
  pizza: IPizza;
}

export const Pizza: React.FC<IPizzaProps> = ({ pizza }) => {
  const initialPrice =
    pizza.pricing.length > 0 ? (
      <p className="text-md mt-[5px] font-semibold">
        From ${pizza.pricing[0].price.toFixed(2)}
      </p>
    ) : null;

  const categories =
    pizza.categories.length > 0 ? (
      <p className="text-sm mt-[10px] text-gray-300">
        {pizza.categories.join(", ")}
      </p>
    ) : null;

  return (
    <div className="rounded-lg p-[16px] bg-[#1b1b1f] cursor-pointer">
      <div className="relative h-[180px] w-full rounded-lg">
        <Image
          src={pizza.imageUrl}
          alt={pizza.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h2 className="text-lg font-bold mt-[15px]">{pizza.name}</h2>
      <p className="text-md mt-[10px]">{pizza.description}</p>
      {initialPrice}
      {categories}
    </div>
  );
};

export default Pizza;
