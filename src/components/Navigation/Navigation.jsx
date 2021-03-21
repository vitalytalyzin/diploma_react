import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ navItems }) => {
  return (
    <>
      {navItems.map((item, idx) => (
        <NavLink
          exact
          key={idx}
          to={item.path}
          className="nav-link"
          activeClassName="active"
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};
export default Navigation;
