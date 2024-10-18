const SuggestedSchools = () => {
  
  const styles = {
    suggestedSchools: {
      backgroundColor: "#f8f8f8",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#FF8303",
      marginBottom: "10px",
    },
    list: {
      listStyleType: "none",
      padding: "0",
    },
    listItem: {
      fontSize: "16px",
      color: "#333",
      padding: "5px 0",
    },
  };

  return (
    <div style={styles.suggestedSchools}>
      <h3 style={styles.heading}>Suggested Schools</h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>Kenya High School</li>
        <li style={styles.listItem}>Nairobi School</li>
      </ul>
    </div>
  );
};

export default SuggestedSchools;
