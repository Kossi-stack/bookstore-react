import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <div className="navBarWrap">
        <div><h1 className="bgHeading">Bookstore CMS</h1></div>
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.id} className="navLink">
              <NavLink
                to={link.path}
                exact={`${true}`}
                className="link"
                activeClassName="activeLink"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
