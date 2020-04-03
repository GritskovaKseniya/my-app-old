import React, { useState } from 'react';
import './App.css';
import {PrintText} from '../PrintText';
import {MakeText} from '../MakeText';

const App: React.FC = () => {
  const [text, setText] = useState();

  return (
    <div className="App">
          <PrintText className="left" text={text}/>
          <MakeText className="right" onSubmit = {setText}/>
    </div>
  );
}

export default App;
