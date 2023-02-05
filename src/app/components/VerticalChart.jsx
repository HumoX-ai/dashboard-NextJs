import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Teams Strength ",
      fontSize: 35,
    },
  },
};

const labels = ["A", "B", "C", "D"];

export const data = {
  labels,
  datasets: [
    {
      label: "All Teams",
      data: [
        faker.datatype.number({ min: 0, max: 1000 }),
        faker.datatype.number({ min: 0, max: 1000 }),
        faker.datatype.number({ min: 0, max: 1000 }),
        faker.datatype.number({ min: 0, max: 1000 }),
      ],
      backgroundColor: ["#59e6f6", "#fabe7a", "#f6866a", "#7661e2"],
    },
  ],
};

export function VerticalChart() {
  return <Bar options={options} data={data} width={400} height={200} />;
}
