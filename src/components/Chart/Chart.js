import './Chart.css';
import React from 'react'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dPoint => dPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //needs a set of numbers comma separated – array with spread op

    return (
        <div className='chart'>
            {props.dataPoints.map(dPoint =>
                <ChartBar
                    key={dPoint.label}
                    value={dPoint.value}
                    maxValue={totalMaximum}
                    label={dPoint.label}
                />
            )}
        </div>
    )
}

export default Chart;