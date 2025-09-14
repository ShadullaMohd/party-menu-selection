import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) => {
    
     if (dishes.length === 0) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-600 text-lg font-medium">No results found 🚫</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dishes.map(dish => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectedDishes.has(dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;