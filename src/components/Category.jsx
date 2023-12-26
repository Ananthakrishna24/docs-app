// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
function Category({ onAddCategory }) {
  const [categories, setCategories] = useState(['All', 'Home', 'Travel']);
  const [selected, setSelected] = useState('All');

  const handleSelect = (category) => {
    setSelected(category);
  };

  if (onAddCategory) {
    onAddCategory((category) => {
      if (categories.length < 8 && !categories.includes(category)) {
        setCategories((oldCategories) => [...oldCategories, category]);
      }
    });
  }

  return (
    <div className='fixed inset-x-0 top-0 z-50 mx-auto px-4 py-2 bg-black bg-opacity-25 backdrop-blur-md text-white flex justify-around items-center w-full'>
      {categories.map((category, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center cursor-pointer px-4 py-2 ${selected === category ? 'bg-gray-800' : 'bg-transparent'}`}
          onClick={() => handleSelect(category)}
        >
          <span className='text-sm'>{category}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default Category;
