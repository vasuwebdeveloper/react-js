import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    debugger;
    const totalMaximum = Math.max(...dataPointValues);
    debugger;
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint,index) => (
        <ChartBar
          key = {index}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
