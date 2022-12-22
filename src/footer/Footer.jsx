import React from 'react';
import './footerStyle.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
  <div className="container">
    <ul>
    <li><Link to="/explore">Explore</Link></li>
    <li> <Link to="/auction">Auction</Link></li>
    <li> <Link to="/marketplace">Marketplace</Link></li>
    <li>  <Link to="/stats">Stats</Link></li>
    <li> <Link to="/activity">Activity</Link></li>
    </ul>
  </div>
</footer>
  )
}

export default Footer