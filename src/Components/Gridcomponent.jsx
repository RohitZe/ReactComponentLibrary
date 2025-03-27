import React, { useState } from 'react';

const Gridcomponet = ({ rows = 4, cols = 4 }) => {
  // Create an array of numbers from 1 to rows*cols
  const numbers = Array.from({ length: rows * cols }, (_, i) => i + 1);
  
  // State to track click counts for each number
  const [clickCounts, setClickCounts] = useState({});

  // Handle tile click
  const handleTileClick = (number) => {
    // Increment click count
    const newClickCounts = {
      ...clickCounts,
      [number]: (clickCounts[number] || 0) + 1
    };

    // Update click counts
    setClickCounts(newClickCounts);

    // Console log details
    console.log(`Number: ${number}, Clicks: ${newClickCounts[number]}`);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div 
        className={`grid grid-cols-${cols} gap-4 bg-gray-800 p-6 rounded-xl shadow-2xl`}
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` 
        }}
      >
        {numbers.map((number) => (
          <div 
            key={number}
            onClick={() => handleTileClick(number)}
            className="
              bg-gray-700 
              text-white 
              text-4xl 
              font-bold 
              flex 
              items-center 
              justify-center 
              p-6 
              rounded-lg 
              cursor-pointer 
              hover:bg-gray-600 
              transition-all 
              duration-300 
              ease-in-out 
              transform 
              hover:scale-105 
              active:scale-95
              select-none
            "
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridcomponet;