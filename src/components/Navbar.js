import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <h1 className="nav_title">Math Magician</h1>
    <nav className="links_list">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Navbar;
