import { useState, useEffect } from 'react';
import React from 'react';
import Plot from 'react-plotly.js';

function Chart() 
{
  const [loadedApps, setLoadedApps] = useState([]);
  
  useEffect(() => {
    fetch(
      'http://localhost:8000/getData'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const Apps = [];

        for (const key in data) {
          const App = {
            id: key,
            ...data[key]
          };

          Apps.push(App);
        }

        setLoadedApps(Apps);
        console.log(JSON.stringify(loadedApps));
      });
  }, []);


  return (
    <div className="chartBox">
      {loadedApps.map((App) =>
    <Plot 
      data={[
        {
          x: [App.x1, App.x2, App.x3, App.x4, App.x5, App.x6, App.x7],
          y: [App.y1, App.y2, App.y3, App.y4, App.y5, App.y6, App.y7],
          marker: {color: 'red'}
        }
      ]}
      layout={ { width: 635, height: 510, title: 'Mouse Tracker Activity Graph'}}
    />
      )}
    </div>
  );
}
  
  export default Chart;