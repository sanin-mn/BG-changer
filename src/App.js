import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
const [color,setColor] = useState("white")

  const redColor = ()=>{
    setColor('red')
  }
  const blueColor = ()=>{
    setColor('blue')
  }
  const greenColor = ()=>{
    setColor('green')
  }
  const yellowColor = ()=>{
    setColor('yellow')
  }

  return (

    <div className='main-bg d-flex align-items-center justify-content-center' style={{backgroundColor:color}}>
   

      <div className='mt-5'>

        <button className='btn btn-danger m-2 ' onClick={redColor}>Red</button>
        <button className='btn btn-info m-2 ' onClick={blueColor}>Blue</button>
        <button className='btn btn-success m-2 ' onClick={greenColor}>Green</button>
        <button className='btn btn-warning m-2 ' onClick={yellowColor}>Yellow</button>

      </div>

<p className='text-center fixed-bottom text-secondary'>sanin©</p>
    </div>
  );
}

export default App;
