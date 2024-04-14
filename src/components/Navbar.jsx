import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="navbar-link">
        <h1 className='text-xl font-bold yellow-gradient_text drop-shadow navbar-text'>
        Emerging Technology and Entrepreneurship Complex
        </h1>
      </NavLink>
    </header>
  );
};

export default Navbar;
