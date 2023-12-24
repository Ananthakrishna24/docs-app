/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function Card({ title, description, timestamp, category }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={cardVariants}
    transition={{ duration: 2, type: 'spring' }} 
    drag
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    className="max-w-sm rounded overflow-hidden shadow-md p-4 m-4 relative backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-300"
    style={{ boxShadow: '0 4px 6px 0 hsla(0, 0%, 100%, 0.1), 0 1px 3px 0 hsla(0, 0%, 100%, 0.08)' }}>

      <div className="absolute top-0 right-0 px-6 py-4">
        <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-200">{category}</span>
      </div>
      <div className="px-6 py-4 pt-10">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base mb-12">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 absolute bottom-0 left-0">
        <span className="text-sm text-gray-300">{timestamp}</span>
      </div>
      <div className="px-6 py-4 absolute bottom-0 right-0">
        <FaArrowRight className="text-white hover:text-gray-300"/>
      </div>
    </motion.div>
  );
}

export default Card;
