import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let char001 = '하츄핑';

  return (
    <div>
      <div className="top_bar">
          <div> 뿡뿡뿡 ㅋㅋ </div>
      </div>
      <img src={reactLogo}/>
      <h4> {char001} </h4>
    </div>
  );
}

export default App
