import React from 'react';

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  return (
    <div
      className={`border rounded-lg p-4 bg-white shadow-md ${
        isSelected ? 'bg-green-100' : ''
      } flex flex-col items-center`}
    >
      <img
        src={dish.category.image}
        alt={dish.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold text-center">{dish.name}</h3>
      <p className="text-sm text-gray-600 text-center mb-2">{dish.description}</p>
      <div className="flex gap-2">
        <button
          onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id))}
          className={`px-4 py-1 rounded-md text-white ${
            isSelected ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isSelected ? 'Remove' : 'Add'}
        </button>
        <button
          onClick={() => onViewIngredients(dish)}
          className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Ingredients
        </button>
      </div>
    </div>
  );
};

export default DishCard;