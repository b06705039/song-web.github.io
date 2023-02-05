import "./App.css";
import React from 'react';
import Styled from 'styled-components';
import Body from './compoonents/Body';
import Background from './img/background.png';


const BackGroundImg = Styled.img`
  height: 100vmin;
  pointer-events: none;
  position: absolute;
  z-index:-1;
  opacity:20%;
`

function App() {
  return (
    <div className="App" >
      <BackGroundImg src={Background} />
      <Body/>
    </div>
  );
}

export default App;
