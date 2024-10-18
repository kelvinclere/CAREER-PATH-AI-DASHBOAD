import Link from "next/link";

const Sidebar = () => {
  
  const styles = {
    sidebar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#333",
      color: "#fff",
      height: "100vh",
      padding: "15px",
    },
    profilePicture: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    },
    profileInfo: {
      textAlign: "center",
      marginBottom: "20px",
    },
    nav: {
      width: "100%",
      textAlign: "left",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
    },
    li: {
      marginBottom: "10px",
    },
    link: {
      color: "#1BD208",
      textDecoration: "none",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.sidebar}>
      <img
        src="https://img.freepik.com/premium-photo/african-american-teen-boy-sits-desk-traditional-classroom-setting-he-wears-black-hair-orange-tie-smiling-warmly-camera-chalkboard-wall-him-suggests-back-school-theme_1268487-4697.jpg?w=740"
        alt="Profile"
        style={styles.profilePicture}
      />
      <h1>Kelvin Otieno</h1>
      <p>38946638/05</p>
      <p>Uzima Primary School</p>
     
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link href="/dashboard" style={styles.link}>
              Dashboard
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/positions" style={styles.link}>
              Positions
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/progress-statistics" style={styles.link}>
              Progress Statistics
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/career-guidelines" style={styles.link}>
              Career Guidelines
            </Link>
          </li>
          <li style={styles.li}>
            <Link href="/existing-careers" style={styles.link}>
              Existing Careers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
