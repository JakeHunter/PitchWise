// src/components/Card.tsx
import React from "react";
import { Item } from "../types";

interface CardProps {
  item: Item;
  onClick: () => void;
  className?: string; // Accept a className prop
}

const Card: React.FC<CardProps> = ({ item, onClick, className }) => (
  <div
    className={`card p-2 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer h-32 ${className}`}
    onClick={onClick}
  >
    <img
      src={item.logo}
      alt={`${item.title} logo`}
      className="w-10 h-10 mb-2"
    />
    <h3 className="text-lg font-bold">{item.title}</h3>
    <p className="text-sm text-gray-600">{item.description}</p>
  </div>
);

export default Card;
