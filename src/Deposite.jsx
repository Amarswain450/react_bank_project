import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { depositeAction } from './redux/actions/bankActions';
import { useNavigate } from 'react-router-dom';

const Deposite = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [depositeVal, setDepositeVal] = useState('');

  const depositeMoney = () => {
    dispatch(depositeAction(parseInt(depositeVal)));
    navigate('/');
  };

  const disableButton = depositeVal ? false : true;

  return (
    <>
      <div className="deposite__component">
        <div className="deposite__container">
          <h3>Deposite Form</h3>
          <div className="deposite__form">
            <form>
              <div className="mb-3">
                <label htmlFor="addMoney" className="form-label">
                  Amount To Deposite
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="₹ 100"
                  id="addMoney"
                  value={depositeVal}
                  onChange={(e) => setDepositeVal(e.target.value)}
                />
              </div>
              <button
                disabled={disableButton}
                type="submit"
                className="btn btn-primary"
                onClick={() => depositeMoney()}
              >
                Add Money
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposite;
