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
        <ul className="navLinks">
          {links.map((link) => (
            <li key={link.id} className="navLink">
              <NavLink
                data-testid={link.id}
                to={link.path}
                activeClassName="active-link"
                exact
                className="link"
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