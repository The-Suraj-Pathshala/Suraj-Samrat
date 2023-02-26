
import { useState } from 'react';
import About from './component/About';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Footer from './component/Footer';

function App() {
const [mode,setMode] = useState('light');

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'gray'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
}

  return (<>
          <Navbar mode={mode} toggleMode={toggleMode}/>
         <Slider/>
          <About/>
           <Footer/>
        </>
  );
}

export default App;
