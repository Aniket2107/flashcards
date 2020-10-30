import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ scoreData }) {
  let date = [],
    score = [];

  scoreData?.map((data) => {
    let d = data.date;
    date.push(d);
    let s = data.score;
    score.push(s);
  });

  const data = {
    labels: date,
    datasets: {
      label: "User progress",
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      data: score,
    },
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default Chart;
