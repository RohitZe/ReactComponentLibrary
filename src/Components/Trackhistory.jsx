import React from 'react';

const TrackHistory = () => {
  const totalBoxes = 20;

  return (
    <div className="bg-black rounded-lg shadow-lg p-8 flex">
      <div className="grid grid-cols-1">
        {/* First Row: Empty Dots */}
        <div className="flex space-x-1 mb-1">
          {[...Array(totalBoxes)].map((_, index) => (
            <div 
              key={index} 
              className="w-5 h-5 m-1 rounded-full bg-gray-500"
            />
          ))}
        </div>
        
        {/* Second Row: For Numbers (Currently Empty) */}
        <div className="flex space-x-1">
          {[...Array(totalBoxes)].map((_, index) => (
            <div 
              key={index} 
              className="w-5 h-5 m-1 rounded-full bg-gray-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackHistory;
