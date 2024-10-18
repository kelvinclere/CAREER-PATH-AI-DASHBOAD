const CareerPath = () => {

  const styles = {
    careerPath: {
      backgroundColor: "#f8f8f8",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      marginTop: "20px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#FF8303",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#333",
    },
  };

  return (
    <div style={styles.careerPath}>
      <h3 style={styles.heading}>Career Path</h3>
      <p style={styles.paragraph}>Social Sciences</p>
    </div>
  );
};

export default CareerPath;
