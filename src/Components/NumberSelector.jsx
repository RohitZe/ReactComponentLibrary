import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { selectNumber } from '../State/numberSlice';

const numbers = [1, 2, 3, 4];

const NumberSelector = () => {
  const dispatch = useDispatch();
  const isTimerActive = useSelector((state) => state.numbers.isTimerActive);
  const winningNumber = useSelector((state) => state.numbers.winningNumber);
  console.log(winningNumber);

  return (
    <div>
      <h3>Select a Number (20s Timer):</h3>
      {numbers.map((num) => (
        <button
          key={num}
          onClick={() => dispatch(selectNumber(num))}
          disabled={!isTimerActive}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumberSelector;