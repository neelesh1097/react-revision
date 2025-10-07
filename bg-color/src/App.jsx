import { useState } from 'react'

import './App.css'
const bgColors = ["#e0f7fa", "#f3e5f5", "#f4f6f8", "#e8f5e9", "#fff3e0"];

function App() {
  const [name, setName] = useState('');
const [last, setLast] = useState('');
const [email, setEmail] = useState('');
const [queryType, setQueryType] = useState('');
const [consent, setConsent] = useState(false);



 const [bg, setBg] = useState("");
 const [bgColor, setBgColor] = useState("#ffffff");



  const handleSubmit = (e) => {

    e.preventDefault();

       const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    document.body.style.backgroundColor = randomColor;

 const formData = {
      firstName: name,
      lastName: last,
      email,
      queryType,
      consent,
    };

    console.log("Form submitted:", formData);
      console.log("Background changed to:", randomColor);

  }
  

  return (
    <>
     <div className="form-container">
    <form className="contact-form" onSubmit={handleSubmit}>

       <h2>Contact Us</h2>

        <div className="form-row">

          <div className="form-group">

            <label htmlFor="first">FIRST NAME</label>
             
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /> 
        
          </div>

            <div className="form-group">

            <label htmlFor="last">LAST NAME</label>
            <input type="text"
             placeholder ='first name'
             id="last" 
             required
             onChange={(e) => setLast(e.target.value)}
             />
          </div>
        </div>

         <div className="form-group">

            <label htmlFor="email">EMAIL</label>
            <input type="text" placeholder ='email'id="email" />
          </div>

            <label>Query Type</label>
        <div className="radio-group">
          <label >
            <input
              type="radio"
              name="queryType"
              value="General Enquiry"
              checked={queryType === "General Enquiry"}
              onChange={(e) => setQueryType(e.target.value)}
            />
            General Enquiry
          </label>

          <label >
            <input
              type="radio"
              name="queryType"
              value="Support Request"
              checked={queryType === "Support Request"}
              onChange={(e) => setQueryType(e.target.value)}
            />
            Support Request
          </label>
        </div>

         <div className="form-group checkbox">
          <label>
            <input type="checkbox" name="consent" required onChange={(e) => setConsent(e.target.checked)}/>
            I consent to being contacted by the team
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>


     </form>
     </div>
    </>
  )
}

export default App
