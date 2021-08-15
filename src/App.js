import styled, { createGlobalStyle } from 'styled-components';
import React, { useEffect, useRef } from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import Slider from './Slider/Slider';

const UrlFundo = "https://occ-0-4906-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaKd32dWKMNPxW_lHqfzHGmBBww_6apUZSphyfDxWsz0aa4vKMIJ64mXxouXKXOzncqPa4nehjZ3VnNPDpeGNtkJHIub.webp?r=c30"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    color: white;
    font-family: 'Netflix Sans Regular', sans-serif;
    overflow-x: hidden;
    background-color: #141414;
  }
`;

const MainApp = styled.div`
  padding: 0 4%;
`

const Background = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
  top: 0;
  left: 0;
  mask-image: linear-gradient(180deg, rgba(0,0,0,1) 80%, rgba(255,0,0,0) 100%);
`

function App() {

  const CardsRef = useRef();

  useEffect(() => {
    console.log(0.92 * (CardsRef.current.clientWidth))
  }, [CardsRef])

  return (
    <React.Fragment>
      <GlobalStyle/>
      <MainApp ref={CardsRef}>
        <Background src={UrlFundo} alt="background"/>
        <Header/>
        <Body/>
        <Slider/>
      </MainApp>
    </React.Fragment>
  );
}

export default App;
