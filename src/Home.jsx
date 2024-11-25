const HomePage = () => {
  return (
    <div style={styles.body}>
      <div style={styles.content}>
        <h1 style={styles.homeText}>Home</h1>
        <h1>SSG CONNECT</h1>
        <p></p>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'rgb(232, 66, 66)',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100vh',
    margin: 0,
  },
  nav: {
    position: 'absolute',
    top: 0,
    padding: '1.5rem',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '20px',
  },
  content: {
    textAlign: 'center',
  },
  homeText: {
    fontSize: '3rem',
  },
};

export default HomePage;
