import React, { useState } from 'react';

function InputComponent({ handleAddItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (inputValue !== '') {
        handleAddItem(inputValue);
        setInputValue('');
      }
    }
  };

  return (
    <input
      className='Input'
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Press Enter to add an item"
    />
  );
}

export default InputComponent;
