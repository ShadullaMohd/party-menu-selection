import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import { dishes, categories } from './data/mockDishes';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(true);
  const [nonVegOnly, setNonVegOnly] = useState(true);
  const [selectedDishes, setSelectedDishes] = useState(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Filter dishes based on category, search, and veg/non-veg
  const filteredDishes = useMemo(() => {
    return dishes
      .filter(dish => dish.mealType === selectedCategory)
      .filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(dish => (vegOnly && dish.type === 'VEG') || (nonVegOnly && dish.type === 'NON-VEG'));
  }, [selectedCategory, searchTerm, vegOnly, nonVegOnly]);

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat] = dishes.filter(d => d.mealType === cat && selectedDishes.has(d.id)).length;
      return acc;
    }, {});
  }, [selectedDishes]);

  const totalSelected = Array.from(selectedDishes).length;

  // Handlers
  const handleAddDish = (id) => {
    const newSet = new Set(selectedDishes);
    newSet.add(id);
    setSelectedDishes(newSet);
  };

  const handleRemoveDish = (id) => {
    const newSet = new Set(selectedDishes);
    newSet.delete(id);
    setSelectedDishes(newSet);
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  return (
    <Router>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Party Menu Selection</h1>
        <Filters
          activeCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegOnly={vegOnly}
          onVegOnlyChange={setVegOnly}
          nonVegOnly={nonVegOnly}
          onNonVegOnlyChange={setNonVegOnly}
          categoryCounts={categoryCounts}
        />
        <DishList
          dishes={filteredDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={handleViewIngredients}
        />
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          {categories.map(cat => (
            <p key={cat} className="text-base sm:text-lg">
              {cat}: {categoryCounts[cat] || 0}
            </p>
          ))}
          <p className="text-base sm:text-lg font-bold mt-2">
            Total Selected: {totalSelected}
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Continue
          </button>
        </div>
        {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} />}
      </div>
    </Router>
  );
}

export default App;