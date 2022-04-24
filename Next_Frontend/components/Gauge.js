import { useState, useEffect } from 'react';
import React from 'react';
import GaugeChart from 'react-gauge-chart'

function Gauge() 
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
    <div>
      {loadedApps.map((App) =>
      
      <GaugeChart id="gauge-chart2" 
      nrOfLevels={30} 
      arcWidth={0.2}
      colors={['#5e5e5e',]}
      textColor={['#ffffff']}
      needleColor={['#ff0000']}
      needleBaseColor={['#ff0000']}
      percent={(App.t1)/100} 
      formatTextValue={value => value + 'hr'}
      />
      )}
    </div>
  );
}
  
  export default Gauge;