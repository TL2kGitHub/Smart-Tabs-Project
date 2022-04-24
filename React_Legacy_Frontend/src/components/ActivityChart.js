import React from 'react';
// https://plotly.com/javascript/react/#introduction
import Plot from 'react-plotly.js';

function ActivityChart() {
		return (
			<div className="chartBox">
			<Plot 
				data={[
					{
						x: ['Pycharm','Chrome','Spotify','Games','File Navigation', 'Discord', 'Steam'],
						y: [4,3,0.4,3,0.7,1,0.5],
						marker: {color: 'red'}
					}
				]}
				layout={ { width: 635, height: 510, title: 'Mouse Tracker Activity Graph'}}
			/>
			</div>
		)
}

export default ActivityChart;