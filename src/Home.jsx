import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Home = () => {
  const { amountData, depositeVal, withdrawVal } = useSelector(
    (state) => state
  );
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
  useEffect(() => {
    if (depositeVal) {
      toast.dark(`${depositeVal} deposited successfully`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }, [depositeVal]);

  useEffect(() => {
    if (withdrawVal) {
      toast.dark(`${withdrawVal} Withdrawl successfully`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  }, [withdrawVal]);

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
      <ToastContainer />
    </>
  );
};

export default Home;
