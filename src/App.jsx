import { useState } from 'react'

import './App.css'

function App() {
  
  const [height,setHeight]=useState()
  const [weight,setWeight]=useState()
  const [bmi,setBmi]=useState(null)
  const[status,setStatus]=useState("")
  function input1(e)
  {
    setHeight(e.target.value)
    
  }
  function input2(e)
  {
    setWeight(e.target.value)
    
  }
  function clear()
  {
    setHeight("")
    setWeight("")
    setBmi(null)
    setStatus()
  }
  function calculate()
  {
    if(height && weight)
    {
      const hm=height/100;
      const bmiv=weight/(hm*hm)
      setBmi(bmiv)
      if(bmiv < 18.5)
      {
        setStatus("Underweight")
      }
      else if(bmiv>18.5 && bmiv<22)
      {
        setStatus("Normal")
      }
      else
      {
        setStatus("Overweight")
      }
    }
    else{
      setBmi(null)
      setStatus("")
    }
  }
  return (
    <>
    <div className='container rounded-md flex bg-stone-400 justify-center items-center m-20 mr-20' >
        
          <div className='flex size-60 h-50'>
            <img src="https://as1.ftcdn.net/jpg/04/02/03/42/1000_F_402034251_pd469Z7inajROMb4GMN0NV0kI8sRWhNB.webp" alt="bmi" />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-white font-bold size-200 mt-10 mb-10'>BMI CALCULATOR</h1>
            <div>
              <label className='ml-5' htmlFor="height">Height in(cm):</label>
              <input className="m-5 text-white bg-gray-500 rounded-lg "type="text" onChange={input1} value={height} />
            </div>
            <div>
              <label  className=" ml-5"htmlFor="weight">Weight in(kgs):</label>
              <input className='m-5 text-white bg-gray-500 rounded-lg' type="text" onChange={input2}value={weight} />
            </div>
            <div className='flex flex-row'>
            <button className='   bg-purple-950 text-white mt-10 border rounded-lg p-2' onClick={calculate}>Calculate bmi</button>
            <button className='  bg-purple-950 text-white mt-10 border rounded-lg pl-5 pr-5 ml-3' onClick={clear}>Clear</button>
            </div>
            <div className='m-10 pl-10 pr-10  border rounded-md bg-slate-400'>
            <p className='text-purple-950'>Your BMI:{bmi}</p>
            <p>Status: {status}</p>
          </div>
          </div>
          
        </div>
    
    </>
  )
}

export default App
