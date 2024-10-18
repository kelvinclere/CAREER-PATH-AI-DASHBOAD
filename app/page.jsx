'use client';
import Sidebar from "../components/Sidebar";
import ChartComponent from "../components/ChartComponent";
import GradesTable from "../components/GradesTable";
import SuggestedSchools from "../components/SuggestedSchools";
import CareerPath from "../components/CareerPath";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />

      <div className={styles.mainContent}>
        <div className={styles.chartSection}>
          <ChartComponent />
        </div>
        <div className={styles.tableSection}>
          <GradesTable />
        </div>
        <button className={styles.generateButton}>
          Generate your Career Path
        </button>
      </div>

      <div className={styles.rightSidebar}>
        <SuggestedSchools />
        <CareerPath />
      </div>
    </div>
  );
}
