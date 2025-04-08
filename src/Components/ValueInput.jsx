import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../State/numberSlice';

const predefinedValues = [100, 200, 300, 400];

 const ValueSelector = () => {
  const dispatch = useDispatch();
  const selectedNumber = useSelector((state) => state.numbers.selectedNumber);
  const isTimerActive = useSelector((state) => state.numbers.isTimerActive);

  const handleAddValue = (value) => {
    if (isTimerActive && selectedNumber) {
      dispatch(addValue({ number: selectedNumber, value }));
    }
  };

  return (
    <div>
      <h3>Add Value for Number {selectedNumber}:</h3>
      {predefinedValues.map((value) => (
        <button
          key={value}
          onClick={() => handleAddValue(value)}
          disabled={!isTimerActive || !selectedNumber}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default ValueSelector;


