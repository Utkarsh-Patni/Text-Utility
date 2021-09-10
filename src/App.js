import './App.css';
import Navbar from './models/Navbar';
import Textarea from './models/Textarea';
import React, {useState} from 'react';


function App() {

  const [mode , setMode] = useState('light')

  const toggleMode = () =>
  {
    if(mode==="light")
    {
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }


  return (
    <div className="App bg-dark text-white">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Textarea mode={mode} />

    </div>
  );
}

export default App;
