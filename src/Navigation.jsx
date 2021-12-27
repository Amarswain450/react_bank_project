import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const homeNavigation = () => {
    navigate('/');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">
            <span className="material-icons" onClick={homeNavigation}>
              home
            </span>
            <span className="title">My Bank</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
