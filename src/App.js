import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { setName, selectName } from './features/counter/userSlice';
import { useSelector, useDispatch } from "react-redux";

function App() {

const [input, setInput] = useState('');
const name = useSelector(selectName);
const dispatch = useDispatch();

const handleClick = () => {
  dispatch(setName(input))
;}

  return (
    <div className="App">
      <header className="App-header">
        <h2>My name</h2>
        <input 
        value={input} 
        onChange={(event) => setInput(event.target.value)}
        type="text"
        />
        <button onClick= {handleClick}>Update name in th Redux store</button>
        <h1>{name}</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
