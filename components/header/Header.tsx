import Navbar from "./Navbar/Navbar";

const Header = ({ className = '', ...props }) => (
  <header className="container">
    <Navbar />
  </header>
);

export default Header;
