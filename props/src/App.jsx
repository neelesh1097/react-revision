import React, { useState } from 'react';
import Card from '../components/Card'

function App() {


    const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);

  function addValue() {
    setValue(value + 1);   // updates 'value'
  }

  function subtractValue() {
    setCounter(counter - 1);   // updates 'counter'
  }


  let obj ={
    username:"neelesh",
    age: 21
  }
  return (
<>
<Card username={"neelesh"}/>
<Card username={obj.username}/>


<h1>chai aur react</h1>
<h2>react with me</h2>

<button onClick={subtractValue}>Click me{counter} </button>
<button onClick={addValue}>Click me{value} </button>


</>
  )
}

export default App
