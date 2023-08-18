const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JULY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const data = {
  labels,
  datasets: [
    {
      data: [5, 55, 15, 18, 5, 100.57, 70, 65, 55, 65, 20],
      backgroundColor: "#219653",
      borderColor: "#219653",
      padding: "1em",
      tension: 0.5,
      font: 12,
    },
    {
      data: [5, 25, 18, 45, 89, 60, 40, 35, 30, 25, 20],
      backgroundColor: "#EF4444",
      borderColor: "#EF4444",
      padding: "1em",
      tension: 0.5,
      font: 12,
      fontWeight: 500,
    },
  ],
};
