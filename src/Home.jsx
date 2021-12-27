import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { amountData } = useSelector((state) => state);
  const navigate = useNavigate();
  const statementNavigation = () => {
    navigate('/statement');
  };
  const depositeNavigation = () => {
    navigate('/deposite');
  };
  const withdrawNavigation = () => {
    navigate('/withdraw');
  };

  return (
    <>
      <div className="home__component">
        <p>Hello User</p>
        <h3>Your Balance is &#x20B9; {amountData}</h3>
        <div className="button__wrapper">
          <button
            type="button"
            className="btn2 btn-light"
            onClick={statementNavigation}
          >
            statement
          </button>
          <button
            type="button"
            className="btn2 btn-light"
            onClick={depositeNavigation}
          >
            deposite
          </button>
          <button
            type="button"
            className="btn2 btn-light"
            onClick={withdrawNavigation}
          >
            withdraw
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
