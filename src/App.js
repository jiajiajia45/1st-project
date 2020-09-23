import React from 'react';
import './App.css';
import Child from './child';
import { TransactionProvider } from './transcontext' 



function App() {
  return (
    <div>
    < Child/>
    <TransactionProvider/>  

      
    </div>
  );
}

export default App;
