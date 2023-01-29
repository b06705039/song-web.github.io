import './App.css';
import Styled from 'styled-components';
import Navbar from './compoonents/nav';
import Background from './img/background.png';


const BackGroundImg = Styled.img`
  

`

function App() {
  return (
    <div className="App" >
      <BackGroundImg src={Background} />
      <Navbar/>
    </div>
  );
}

export default App;
