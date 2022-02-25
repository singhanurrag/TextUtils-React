import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from "react";
import Alert from './components/Alert';


function App() {
  const [mode, setMode]= useState('light');
  const[btntext, setbtntext]=useState('Dark Mode');
  const[alert , setalert]=useState(null);
   
  const showalert=(message)=>{
        setalert({
          msg: message
        })
        setTimeout(() => {
          setalert(null)
        }, 1000);
  }

  const togglemode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#3d5266'
      setbtntext('Dark Mode Enabled')
      document.title='TextUtils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setbtntext('Dark Mode')
      document.title='TextUtils - Home'
    }
  } 
  return (
    <>
    <Navbar mode={mode} togglemode={togglemode} btntext={btntext}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
         <TextForms heading="Enter the text to analyze"  mode={mode} showalert={showalert}/> 
    </div>

    </>
  );
}

export default App;
