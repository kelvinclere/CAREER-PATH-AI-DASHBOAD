import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const styles = {
    chartContainer: {
      width: "100%",
      maxWidth: "600px",
      margin: "20px auto",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    heading: {
      fontSize: "20px",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    date: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "15px",
    },
  };

  const data = {
    labels: ["English", "Kiswahili", "Kenyan Sign Language", "Mathematics"],
    datasets: [
      {
        label: "Grade Six",
        data: [70, 80, 74, 60],
        backgroundColor: "#FF8303",
      },
      {
        label: "Grade Seven",
        data: [70, 84, 70, 75],
        backgroundColor: "#808080",
      },
      {
        label: "Grade Eight",
        data: [90, 84, 60, 65],
        backgroundColor: "#1BD208",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Overall Grades" },
    },
    scales: {
      y: { beginAtZero: true },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
  };

  const chartStyles = {
    height: "300px", 
  };

  return (
    <div style={styles.chartContainer}>
      <h2 style={styles.heading}>Overall Grades</h2>
      <p style={styles.date}>5 March 2024</p>
      <div style={chartStyles}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
