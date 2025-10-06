import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);



  function Setcounter() {
  setCount(count + 1);
}


function increment(){
 setCount(prev => prev+1);
}

function decrement(){
  setCount(prev => prev - 1);
}
  

  return (
    <>
    <div className='app'>
    <button onClick ={Setcounter}> count :{count}</button>
    <button onClick={increment}>Increment:{count}</button>
      <button onClick={decrement}>Decrement:{count}</button>
     </div>
    </>
  )
}

export default App
