import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Statement = () => {
  const { details } = useSelector((state) => state);
  const navigate = useNavigate();
  const depositeNavigation = () => {
    navigate('/deposite');
  };
  const withdrawNavigation = () => {
    navigate('/withdraw');
  };
  return (
    <>
      <div className="statement__component">
        <div className="statement__container">
          <h3>Account Statement</h3>
          <div className="table__wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>When</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {details &&
                  details.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th>
                          {data.currentDate} <span>{data.currentTime}</span>
                        </th>
                        <td>{data.type.toUpperCase()}</td>
                        <td>{data.amount}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="button__wrapper">
            <button
              type="button"
              className="btn1 btn-light"
              onClick={depositeNavigation}
            >
              deposite
            </button>
            <button
              type="button"
              className="btn1 btn-light"
              onClick={withdrawNavigation}
            >
              withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statement;
