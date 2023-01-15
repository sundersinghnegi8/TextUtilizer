
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
  })

  setTimeout(() =>{
    setAlert(null);
  },1500);
}


  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#05182a";
      showAlert("Dark mode is enable.","success");
      document.title = 'TextUtilizer- DarkMode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable.","success");
      document.title = 'TextUtilizer- LightMode';

    }
  } 
  return (
    <>
      
      <Navbar title="TextUtilizer" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text to Process" mode={mode}/>
      </div>
      

    </>
  );
}

export default App;
