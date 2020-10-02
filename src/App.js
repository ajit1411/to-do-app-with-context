import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main/Main';
import ToDoContextProvider from './Context/ToDoContext';

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <Main />
      </ToDoContextProvider>
    </div>
  );
}

export default App;
