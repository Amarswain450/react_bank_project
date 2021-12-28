import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withDrawAction } from './redux/actions/bankActions';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [withdrawVal, setWithDrawVal] = useState('');
  const withdrawFun = () => {
    dispatch(withDrawAction(parseInt(withdrawVal)));
    navigate('/');
  };

  const disableButton = withdrawVal ? false : true;
  return (
    <>
      <div className="withdraw__component">
        <div className="withdraw__container">
          <h3>Withdrawl Form</h3>
          <div className="withdraw__form">
            <form>
              <div className="mb-3">
                <label htmlFor="drawMoney" className="form-label">
                  Amount To draw
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="drawMoney"
                  placeholder="₹ 100"
                  value={withdrawVal}
                  onChange={(e) => {
                    setWithDrawVal(e.target.value);
                  }}
                />
              </div>
              <button
                disabled={disableButton}
                type="submit"
                className="btn btn-primary"
                onClick={withdrawFun}
              >
                Get Money
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
