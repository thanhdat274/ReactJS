import React, { useState } from 'react'
import './App.css';
import Square from './components/square';
import styles from './App.module.css';
import styled from 'styled-components';


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [XPlay, setXPlay] = useState(true)
  const winner = caculateWiner(board)

  const reset = () => {
    setBoard(Array(9).fill(null))
  }
  const handPlay = (index) => {
    const temp = board.slice()
    if (XPlay) {
      temp[index] = "X"
    } else {
      temp[index] = "O"
    }
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    setBoard(temp)
    setXPlay(!XPlay)
  }
  console.log(board);
  return (
    <Container>
      {winner ? <h3>Win {winner}</h3> : null}
      <Broad>
        {board.map((item, index) => <Square value={item} handPlay={() => handPlay(index)} key={index} />)}
      </Broad>
      <button onClick={() => reset()}>Reset</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Broad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
`;
const caculateWiner = (board) => {
  const mang = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < mang.length; i++) {
    const [a, b, c] = mang[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
export default App;
