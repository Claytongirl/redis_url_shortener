import React from 'react';
import './App.css';

function App() { 
  
  return (
    <div className="app">
      <div className="appHeader">   
        <div className="title"> My URL Shortener</div>
        <div className="allLinks">All Links</div>
      </div>

      <div className = "body">
		    <input id="urlBox" type="text" placeholder="https://www.wsj.com"/>
        <button className= "button" onclick="shortenFunction()">SHORTEN URL</button>
        <p className="output">Your shortened URL is: OUTPUT</p>
      </div>
    </div>
    )
  }


export default App;
