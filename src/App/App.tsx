import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import {PrintText} from '../ReturnText/ReturnText';
import {MakeText} from '../MakeTheText/MakeTheText';

const App: React.FC = () => {
  const [text, setText] = useState();
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="ya tyt" />*/}
        <div id="left">
          <p><PrintText text={text}/></p>
        </div>
        {/*<p>
          Edit <code>src/App/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        <div id="right">
          <p><b>Введите текст:</b></p>
          <p><MakeText onSubmit = {setText}/></p>
        </div>
      </header>
    </div>
  );
}

export default App;
