import React from 'react'
import Card from '../components/Card'

function App() {

  let obj ={
    username:"neelesh",
    age: 21
  }
  return (
<>
<Card username={"neelesh"}/>
<Card username={obj.username}/>


</>
  )
}

export default App
