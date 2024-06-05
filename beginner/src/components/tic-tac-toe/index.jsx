import React, { useEffect, useState } from "react";
import "./style.css";
function Square({ value, onclick }) {
  return (
    <button onClick={onclick} className="square">
      {value}
    </button>
  );
}

function TicTacTor() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState(false);

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner() && cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXTurn(!isXturn);
    setSquares(cpySquares);
  }

  function getWinner() {
    const winningPosition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPosition.length; i += 1) {
      const [x, y, z] = winningPosition[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  useEffect(() => {
    if (!getWinner() && squares.every((item) => item !== "")) {
      setStatus("this is a draw please restart the game");
    } else if (getWinner()) {
      setStatus(`Winner is ${getWinner()}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXturn ? "X" : "O"}`);
    }
  }, [isXturn, squares]);

  return (
    <div className="tic-tac-toe-container bg-gray-200 rounded-lg shadow-lg">
      <h1 className="text-4xl mb-4 text-center">Tic-Tac-Toe</h1>
      <div className="grid grid-cols-3">
        <Square onclick={() => handleClick(0)} value={squares[0]} />
        <Square onclick={() => handleClick(1)} value={squares[1]} />
        <Square onclick={() => handleClick(2)} value={squares[2]} />
        <Square onclick={() => handleClick(3)} value={squares[3]} />
        <Square onclick={() => handleClick(4)} value={squares[4]} />
        <Square onclick={() => handleClick(5)} value={squares[5]} />
        <Square onclick={() => handleClick(6)} value={squares[6]} />
        <Square onclick={() => handleClick(7)} value={squares[7]} />
        <Square onclick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h2 className="text-2xl mt-8 text-center">{status}</h2>
      <button
        onClick={handleRestart}
        className="block mx-auto mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Restart
      </button>
    </div>
  );
}

export default TicTacTor;
