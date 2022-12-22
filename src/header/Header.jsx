import React from 'react';
import "./headerStyle.css";
import Logo from "../Assets/images.png";
import { ArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


function Header() {

  return (
    <header>
      {/* logo */}
      <Link to="/"> <img src={Logo} alt="Logo" /></Link>
       
      {/* search bar */}
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      {/* navigation tabs */}
      <nav>
        <>
        <Link to="/explore">Explore</Link>
         <Link to="/auction">Auction</Link>
         <Link to="/marketplace">Marketplace</Link>
         <Link to="/stats">Stats</Link>
         <Link to="/activity">Activity</Link>
        </>
      </nav>
    </header>
  );
}

export default Header;