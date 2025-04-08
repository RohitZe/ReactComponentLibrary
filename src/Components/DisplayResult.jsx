import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disableSelection, setWinningNumber } from '../State/numberSlice';
import { submitBets, fetchWinningNumber } from '../Services/api';

export const DisplayResults = () => {
  const gameId = useSelector((state) => state.numbers.gameId);
  const values = useSelector((state) => state.numbers.values);
  const isTimerActive = useSelector((state) => state.numbers.isTimerActive);
  const [sessionId, setSessionId] = useState(null);
  const [winningNum, setWinningNum] = useState(null);
  const [loading, setLoading] = useState({ submit: false, winning: false });
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // Submit bets after 40 seconds
  useEffect(() => {
    const submitTimer = setTimeout(async () => {
      if (isTimerActive) {
        setLoading(prev => ({ ...prev, submit: true }));
        dispatch(disableSelection());
        
        try {
          const token = localStorage.getItem('token');
          const result = await submitBets(gameId, values || {}, token);
          setSessionId(result.data.sessionId);
        } catch (err) {
          setError('Bet submission failed');
          console.error(err);
        } finally {
          setLoading(prev => ({ ...prev, submit: false }));
        }
      }
    }, 60000); 

    return () => clearTimeout(submitTimer);
  }, [dispatch, isTimerActive, gameId, values]);

 
  useEffect(() => {
    const winningTimer = setTimeout(async () => {
      if (sessionId) { // Only run if we have a session ID
        setLoading(prev => ({ ...prev, winning: true }));
        try {
          const number = await fetchWinningNumber(sessionId);
          setWinningNum(number);
          dispatch(setWinningNumber(number));
        } catch (err) {
          setError('Failed to get winning number');
          console.error(err);
        } finally {
          setLoading(prev => ({ ...prev, winning: false }));
        }
      }
    }, 61000); 

    return () => clearTimeout(winningTimer);
  }, [sessionId, dispatch]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">
        Game Status: {isTimerActive ? `Active (${loading.submit ? 'Submitting bets...' : 'Waiting'})` : 'Closed'}
      </h3>
      
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <h4 className="font-medium mb-1">Your Bets:</h4>
        <ul>
          {Object.entries(values || {}).map(([number, total]) => (
            <li key={number} className="py-1">
              Number {number}: ${total}
            </li>
          ))}
        </ul>
      </div>

      {loading.winning ? (
        <p className="text-blue-500">Fetching winning number...</p>
      ) : winningNum !== null && (
        <div className="mt-4 p-3 border-2 border-green-500 rounded-lg">
          <p className="text-lg">Winning Number:</p>
          <p className="text-3xl font-bold text-center">{winningNum}</p>
        </div>
      )}
    </div>
  );
};