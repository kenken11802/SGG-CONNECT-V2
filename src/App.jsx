import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const App = () => {
  return (
    <Router basename="/supply-office-v2">
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about-us" style={styles.navLink}>About Us</Link>
        <Link to="/contact-us" style={styles.navLink}>Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

const styles = {

  nav: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    padding: '1.5rem',
    width: '100%'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: "0 15px",
    fontSize: "20px",
    fontFamily: 'Arial, sans-serif',
  }
};

export default App;
