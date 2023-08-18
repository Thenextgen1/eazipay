"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data } from "@/app/data/line";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<"line"> = {
  layout: {
    padding: 20,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {},

      title: {
        display: true,
        color: "#11453B",
        text: "Month",
        font: {
          family: "aaeonik",
          size: 16,
          weight: "bold",
          lineHeight: 1.2,
        },
        padding: { top: 10, bottom: 0 },
      },
    },
    y: {
      min: 0,
      max: 200,

      grid: {
        color: "#DDDEDD",
      },

      title: {
        display: true,
        color: "#515251",
        text: "Value in (M)",
        font: {
          family: "aeonik",
          size: 16,
          weight: "bold",
          lineHeight: 1.2,
        },
        padding: { bottom: 10, top: 0 },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const LineChart = () => {
  return (
    <div className="bg-white rounded-2xl lg:p-12 p-6">
      <div className="flex justify-between flex-wrap">
        <p>
          <span className="font-medium mb-4 text-eaziDark">Inflow</span>
          <span className="block text-[#219653] my-2 text-lg font-bold lg:text-[28px]">
            N1,567,552
          </span>
        </p>
        <p className="mx-2">
          <span className="font-medium mb-4 text-eaziDark">Outflow</span>
          <span className="block text-[#EF4444] my-2 font-bold text-lg lg:text-[28px]">
            N1,567,552
          </span>
        </p>
        <p>
          <span className="text-sm tracking-[0.1px] font-medium text-eaziGreen">
            Inflow/Outflow{" "}
          </span>
          <span className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 9.17C16.8126 8.98375 16.5592 8.87921 16.295 8.87921C16.0308 8.87921 15.7774 8.98375 15.59 9.17L12 12.71L8.46001 9.17C8.27265 8.98375 8.0192 8.87921 7.75501 8.87921C7.49082 8.87921 7.23737 8.98375 7.05001 9.17C6.95628 9.26297 6.88189 9.37357 6.83112 9.49543C6.78035 9.61729 6.75421 9.74799 6.75421 9.88C6.75421 10.012 6.78035 10.1427 6.83112 10.2646C6.88189 10.3864 6.95628 10.497 7.05001 10.59L11.29 14.83C11.383 14.9237 11.4936 14.9981 11.6154 15.0489C11.7373 15.0997 11.868 15.1258 12 15.1258C12.132 15.1258 12.2627 15.0997 12.3846 15.0489C12.5064 14.9981 12.617 14.9237 12.71 14.83L17 10.59C17.0937 10.497 17.1681 10.3864 17.2189 10.2646C17.2697 10.1427 17.2958 10.012 17.2958 9.88C17.2958 9.74799 17.2697 9.61729 17.2189 9.49543C17.1681 9.37357 17.0937 9.26297 17 9.17Z"
                fill="#8D8E8D"
              />
            </svg>
          </span>
        </p>
      </div>
      <div className="mt-12 h-[240px]">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;
