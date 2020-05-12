import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridContainer from './Components/GridContainer';
import GridItem from './Components/GridItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GridContainer columns={4} columnGap={20}>
        <GridItem columnSize={2}>
          <p>Viado</p>
          <GridContainer columns={2}>
            <p>Teu pai aquele corno</p>
            <p>Teu pai aquele corno</p>
            <p>Teu pai aquele corno</p>
          </GridContainer>
        </GridItem>

        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
        <p>Viado</p>
      </GridContainer>
    </div>
  );
}

export default App;
