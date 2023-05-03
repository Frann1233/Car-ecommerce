import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const buttonLabel = location.pathname === '/' ? 'Create' : 'Listing';
  const to = location.pathname === '/' ? '/create' : '/';

  return <Link to={to}>{buttonLabel}</Link>;
}
export default Navigation;
