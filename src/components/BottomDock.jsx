import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { IoHomeOutline, IoSettingsOutline, IoCreateOutline, IoTrashOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; 

function BottomDock() {
  const navigate = useNavigate(); 
  const [selected, setSelected] = React.useState('Home'); // Set 'Home' as the default selected

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  const navigationMap = {
    'Home': '/',
    'Settings': '/settings', 
    'Create New': '/create', 
  };

  const handleClick = (item) => {
    setSelected(item);
    navigate(navigationMap[item]); 
  };

  const handleDelete = () => {
    console.log("Delete Pressed");
  };

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 mx-auto p-4 bg-black bg-opacity-25 border-t border-gray-600 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:mb-4 text-white flex justify-around items-center max-w-2xl w-full lg:w-auto'>
      {[
        { name: 'Home', icon: <IoHomeOutline className='w-6 h-6' />, isSelected: selected === 'Home' },
        { name: 'Settings', icon: <IoSettingsOutline className='w-6 h-6' />, isSelected: selected === 'Settings' },
        { name: 'Create New', icon: <IoCreateOutline className='w-6 h-6' />, isSelected: selected === 'Create New' },
      ].map((item) => (
        <motion.button
          key={item.name}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex flex-col items-center space-y-1 ${item.isSelected ? 'text-purple-400' : 'text-gray-400'}`}
          onClick={() => handleClick(item.name)}
        >
          {item.icon}
          <span className='text-xs'>{item.name}</span>
        </motion.button>
      ))}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95, color: '#ef4444' }}
        className='flex flex-col items-center space-y-1 text-gray-400'
        onClick={handleDelete}
      >
        <IoTrashOutline className='w-6 h-6' />
        <span className='text-xs'>Delete Selected</span>
      </motion.button>
    </div>
  );
}

export default BottomDock;
