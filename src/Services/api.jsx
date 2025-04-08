// services/api.js
const API_BASE = 'https://betting-backend-dq5j.onrender.com';

export const submitBets = async (gameId, values, token) => {
  try {
    const response = await fetch(`${API_BASE}/place-bet/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        gameId,
        bets: Object.entries(values || {}).map(([choice, amount]) => ({
          choice: String(choice),
          amount: Number(amount)
        }))
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Bet submission failed');
    }
    return await response.json();
  } catch (error) {
    console.error('[API] submitBets failed:', error);
    throw error;
  }
};

export const fetchWinningNumber = async (sessionId) => {
  try {
    const response = await fetch(`${API_BASE}/session/${sessionId}`);
    if (!response.ok) throw new Error('Failed to fetch winning number');
    const data = await response.json();
    return data.data.result;
  } catch (error) {
    console.error('[API] fetchWinningNumber failed:', error);
    throw error;
  }
};