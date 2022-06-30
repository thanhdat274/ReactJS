import React, {} from 'react'
import './App.css';
import Square from './components/square';
import styled from 'styled-components'
function App() {
  return (
    <Broad>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </Broad>
  );
}

// function Box(props) {
//   return (
//     <div style={{ margin: 'auto', backgroundColor: props.color , height: 100, width: 100}}>
//       <h3 style={{color: props.textColor}}>HIHIHI</h3>
//     </div>
//   )
// }

const Broad = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin: auto;
  max-width: 200px;
`
export default App;
