import React from 'react';
import { useState } from 'react';
function ListItemComponent({ item, index }) {
    const [isChecked, setIsChecked] = useState(false);
    const[isDeleted, setIsDeleted] = useState(false)
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleDelete = () => {
      setIsDeleted(true)
  }
     
    const liStyle = {
      textDecoration: isChecked ? 'line-through' : 'none',
      display: isDeleted ? 'none' : 'flex'
      
    };
   
  return (
    <div style={liStyle} delete={isDeleted} className='flex listitems'>
      <div className='flex'>
        <input className='checkbox' type="checkbox" onChange={handleCheckboxChange} />
        <li className='todoli' key={index}>{item.name}</li>
        <p className='category'>{item.category==="All" ? 'Uncategorized' : item.category}</p>
      </div>
      <div className='trashcan' onClick={handleDelete}></div>
    </div>
  );
}

export default ListItemComponent;
