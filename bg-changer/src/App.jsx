import { useState } from "react";
import "./App.css";
import Card from "../components/Card";


function App() {

 
 const [bgColor, setBgColor] = useState("red");

    const changeBackground = (color) => {
    setBgColor(color);
  };


  const cardData = {
    image: "/img/building.jpg",
    category: "Company retreats",
    title: "Incredible accommodation for your team",
    description:
      "Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.",
  };

  return(
   <div style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}>
      <h1>Background Changer App</h1>

      {/* Buttons to change background */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => changeBackground("#fef08a")}>Yellow</button>
        <button onClick={() => changeBackground("#93c5fd")}>Blue</button>
        <button onClick={() => changeBackground("#a7f3d0")}>Green</button>
        <button onClick={() => changeBackground("#fca5a5")}>Red</button>
      </div>

       </div>
  )

  // Prop drilling example
  return <Parent data={cardData} />;
}

function Parent({ data }) {
  return <Child  info ={data} />;

  function Child({info}){
    return <Card {...info}/>
  }
}

export default App;
