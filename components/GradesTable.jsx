import { useState } from "react";

const GradesTable = () => {
  const [showAll, setShowAll] = useState(false);

  const styles = {
    table: {
      width: "100%",
      margin: "20px 0",
      borderCollapse: "collapse",
      fontSize: "16px",
      textAlign: "left",
    },
    th: {
      backgroundColor: "#f4f4f4",
      padding: "10px 15px",
      borderBottom: "2px solid #ddd",
    },
    td: {
      padding: "10px 15px",
      borderBottom: "1px solid #ddd",
    },
    trHover: {
      cursor: "pointer",
      backgroundColor: "#fafafa",
    },
    button: {
      marginTop: "10px",
      padding: "8px 12px",
      backgroundColor: "transparent", 
      color: "#1BD208", 
      border: "none",
      cursor: "pointer",
      textAlign: "left", 
      fontSize: "16px", 
    },
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Grade</th>
            <th style={styles.th}>English</th>
            <th style={styles.th}>Kiswahili</th>
            <th style={styles.th}>Kenyan Sign Language</th>
            <th style={styles.th}>Mathematics</th>
            <th style={styles.th}>Science & Technology</th>
            {/* Conditionally render hidden columns */}
            {showAll && (
              <>
                <th style={styles.th}>Agriculture & Nutrition</th>
                <th style={styles.th}>Social Studies</th>
                <th style={styles.th}>Creative Arts</th>
                <th style={styles.th}>Christian Religious Education</th>
                <th style={styles.th}>Islamic Religious Education</th>
                <th style={styles.th}>Hindu Religious Education</th>
                <th style={styles.th}>Science & Technology Project</th>
                <th style={styles.th}>Agriculture & Nutrition Project</th>
                <th style={styles.th}>Social Studies Project</th>
                <th style={styles.th}>Creative Arts Project</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <tr style={styles.trHover}>
            <td style={styles.td}>Grade Six</td>
            <td style={styles.td}>75</td>
            <td style={styles.td}>70</td>
            <td style={styles.td}>68</td>
            <td style={styles.td}>70</td>
            <td style={styles.td}>80</td>
            {showAll && (
              <>
                <td style={styles.td}>85</td>
                <td style={styles.td}>74</td>
                <td style={styles.td}>76</td>
                <td style={styles.td}>70</td>
                <td style={styles.td}>65</td>
                <td style={styles.td}>60</td>
                <td style={styles.td}>72</td>
                <td style={styles.td}>71</td>
                <td style={styles.td}>74</td>
                <td style={styles.td}>73</td>
              </>
            )}
          </tr>
          <tr style={styles.trHover}>
            <td style={styles.td}>Grade Seven</td>
            <td style={styles.td}>80</td>
            <td style={styles.td}>78</td>
            <td style={styles.td}>70</td>
            <td style={styles.td}>84</td>
            <td style={styles.td}>79</td>
            {showAll && (
              <>
                <td style={styles.td}>88</td>
                <td style={styles.td}>70</td>
                <td style={styles.td}>72</td>
                <td style={styles.td}>80</td>
                <td style={styles.td}>76</td>
                <td style={styles.td}>78</td>
                <td style={styles.td}>82</td>
                <td style={styles.td}>80</td>
                <td style={styles.td}>75</td>
                <td style={styles.td}>74</td>
              </>
            )}
          </tr>
          <tr style={styles.trHover}>
            <td style={styles.td}>Grade Eight</td>
            <td style={styles.td}>85</td>
            <td style={styles.td}>82</td>
            <td style={styles.td}>78</td>
            <td style={styles.td}>90</td>
            <td style={styles.td}>84</td>
            {showAll && (
              <>
                <td style={styles.td}>86</td>
                <td style={styles.td}>60</td>
                <td style={styles.td}>65</td>
                <td style={styles.td}>85</td>
                <td style={styles.td}>78</td>
                <td style={styles.td}>72</td>
                <td style={styles.td}>80</td>
                <td style={styles.td}>84</td>
                <td style={styles.td}>88</td>
                <td style={styles.td}>85</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
      <button onClick={handleToggle} style={styles.button}>
        {showAll ? "Show Less" : "See All"}
      </button>
    </>
  );
};

export default GradesTable;
