import React from 'react';

const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
    <h2 className="text-xl font-bold mb-2">{dish.name}</h2>
    <p className="text-gray-600 mb-4">{dish.description}</p>
    <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
    <ul className="list-disc pl-5 mb-4">
      {dish.ingredients.map((ing, idx) => (
        <li key={idx} className="text-sm">
          {ing.name}: {ing.quantity}
        </li>
      ))}
    </ul>
    <button
      onClick={onClose}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
    >
      Close
    </button>
  </div>
</div>

  );
};

export default IngredientModal;