import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const add =()=>{
    setCount(count+1)
  }

  const minus =()=>{
    if(count === 0){
      return 0;
    }else{
      setCount(count-1)
    }
  }

  const reset =()=>{
    setCount(0)
  }


  return (
    <><div className='counter-card'><h1>{count}</h1></div>
    <div className='btn-div'>
    <button onClick={add}>Increment</button>
    <button onClick={minus}>Decrement</button> 
    <button onClick={reset}>Reset</button>
    </div>
    </>
  ) 
}

export default App
