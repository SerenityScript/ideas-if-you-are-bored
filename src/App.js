import { useEffect, useState } from 'react';
import './App.css';
import video from './sea.mp4';

function App() {
  const [idea, setIdea] = useState("")

useEffect(() => {
  getIdea();
}, [])
  
const getIdea = async() => {
  const response = await fetch(`https://bored.api.lewagon.com/api/activity`);
  const data = await response.json();
  console.log(data.activity
  )
  setIdea(data.activity)
}
  
  return (
    <div className="App">
      <video autoPlay muted loop >
        <source src={video} type='video/mp4' />
      </video>
      <div className='Container'>
        <h1>Are you bored?</h1>
        <h2>Here are some ideas for you:</h2>
        <h2>"{idea}"</h2>
        <button onClick={getIdea}>Next please</button>
      </div>
    </div>
  );
}

export default App;
