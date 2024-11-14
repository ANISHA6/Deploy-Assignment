// App.js
import React from 'react';
import AssignmentCard from './AssignmentCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="grid-overlay"></div> 
      <AssignmentCard />
    </div>
  );
}

export default App;
