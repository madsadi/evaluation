import ReactEcharts from "echarts-for-react";

export default function BarChart(){
    const option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['january', 43.3, 85.8],
                ['february', 83.1, 73.4],
                ['march', 86.4, 65.2],
                ['april', 72.4, 53.9],
                ['may', 72.4, 53.9],
                ['june', 72.4, 53.9],
                ['august', 72.4, 53.9],
                ['september', 72.4, 53.9],
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }]
    };

    return(
        <ReactEcharts style={{height: "350px"}} option={option}/>

    )
}