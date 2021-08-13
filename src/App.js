import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import Slider from './Slider/Slider';

const UrlFundo = "https://occ-0-4906-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaKd32dWKMNPxW_lHqfzHGmBBww_6apUZSphyfDxWsz0aa4vKMIJ64mXxouXKXOzncqPa4nehjZ3VnNPDpeGNtkJHIub.webp?r=c30"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    color: white;
    font-family: 'Netflix Sans Regular', sans-serif;
    background-size: cover;
    overflow-x: hidden;
    background: black url(${UrlFundo}) no-repeat center;
    background-size: cover;
  }
`

const MainApp = styled.div`
  margin: 10px 30px;
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainApp className="app">
        <Header />
        <Body />
        <Slider />
      </MainApp>
    </React.Fragment>
  );
}

export default App;
