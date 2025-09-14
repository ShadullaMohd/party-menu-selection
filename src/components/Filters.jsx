import React from "react";
import { categories } from "../data/mockDishes";

const Filters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  nonVegOnly,
  onNonVegOnlyChange,
  categoryCounts,
}) => {
  return (
    <div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition ${
              activeCategory === cat
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat} ({categoryCounts[cat] || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search dishes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Veg / Non-Veg Toggles */}
      <div className="flex gap-6 mb-4 justify-center">
        {/* Veg Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Veg</span>
          <button
            onClick={() => onVegOnlyChange(!vegOnly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              vegOnly ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                vegOnly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Non-Veg Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Non-Veg</span>
          <button
            onClick={() => onNonVegOnlyChange(!nonVegOnly)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              nonVegOnly ? "bg-red-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                nonVegOnly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
