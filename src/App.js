import React, { createContext } from 'react';
import './App.css';
import './component/InnerComponent';
import InnerComponent from './component/InnerComponent';

export const SomeContext = createContext();


function App() {
  return (
    <div className="App">
      <h1>Title here</h1>
      <SomeContext.Provider value={{ valueObj: {val1:"news", val2:"news2"} }}>
        <SomeContext.Consumer>
          {({valueObj, ...props}) => <InnerComponent valueObj={valueObj} />}
        </SomeContext.Consumer>
      </SomeContext.Provider>
    </div>
  );
}

export default App;
