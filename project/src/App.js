import React from 'react';
import './App.css';
import Name from './Component/Profile/FullName';
import Photo from './Component/Profile/ProfilPhoto';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
     <Name /> 
     <Photo />
     <Address />
    </div>
  );
}

export default App;
