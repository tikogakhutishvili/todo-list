import React from 'react';
import { useState } from 'react';
const Clist = [
    {
        id: 1,
        categories: 'All'
    },
    {
        id: 2,
        categories: 'Groceries'
    },
    {
        id: 3,
        categories: 'College'
    },
    {
        id: 4,
        categories: 'Payments'
    }
]
const Categories = ({ handleCategoryClick }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    return (
      Clist.map((item) => (
        <li
          className={`CategoriesLi ${selectedCategory === item.categories ? 'selected' : ''}`}
          key={item.id}
          onClick={() => {
            handleCategoryClick(item.categories);
            setSelectedCategory(item.categories);
          }}
        >
          {item.categories}
        </li>
      ))
    );
  };
  
  
export default Categories;