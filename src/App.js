import React, { useState, useEffect } from 'react';
import './App.css'
import InputComponent from './handleInputChange';
import ListItemComponent from './addListitems'; 
import Categories from './categorieslist';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }
  
  const handleAddItem = (newTodoValue) => {
    const newCategory = {
      name: newTodoValue,
      category: selectedCategory || 'Uncategorized'
    }
    setItems([...items, newCategory]);
  };

  useEffect(() => {
    const filtered = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);
    setFilteredItems(filtered);
  }, [selectedCategory, items]);


  return (
    <div className="App">
      <main>
        <div className='categories'>
          <ul>
            <Categories handleCategoryClick={handleCategoryClick} />
          </ul>
        </div>
        <div className='main'>
          <h1>
            {selectedCategory ? selectedCategory : 'All Items'}
          </h1>
          <InputComponent handleAddItem={handleAddItem} />
          <ul className='listbox'>
            {filteredItems.map((item, index) => (
              <ListItemComponent item={item} key={index} />
            ))}
          </ul>

        </div>
      </main>
    </div>
  );
}

export default App;
