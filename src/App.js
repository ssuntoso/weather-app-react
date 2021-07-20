import './App.css';
import React from 'react';
import { useState } from 'react';
import './index.css'

const api = {
  key: "c24bbfe6f119008bbdb9810f76b9bc86",
  base: "http://api.openweathermap.org/data/2.5/weather",
}

function App() {
  const [loc, setLoc] = useState([])
  const [data, setData] = useState([])

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}?q=${loc}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoc('');
        console.log(result);
      });
    }
  }

  return (
    <div className="bg-blue-400">
      <div className="md:container mx-auto justify-items-center">
        <div className="p-8">
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input 
              type="text"
              className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              placeholder="Search..."
              onChange={e => setLoc(e.target.value)}
              value={loc}
              onKeyPress={search}
            />
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {(typeof data.main != "undefined") ? (
          <div>
            <h1 className="text-5xl">
              {data.name}
            </h1>
            <h1 className="text-9xl">
              {Math.round(data.main.temp-273)}°
            </h1>
            <h2 className="text-3xl">
              {data.weather[0].main}
            </h2>
          </div>
        ) : ('')}
      </div>
    </div>
  );
}

export default App;
