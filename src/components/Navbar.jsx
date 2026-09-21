import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">NETFLIX</h1>
      <div className="navbar-right">
        <select className="navbar-lang">
          <option>English</option>
          <option>हिंदी</option>
        </select>
        <button className="navbar-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;