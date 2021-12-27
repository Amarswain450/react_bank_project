import { DEPOSITE, WITHDRAW } from '../constants/types';

export const depositeAction = (payload) => {
  return {
    type: DEPOSITE,
    payload: payload,
  };
};

export const withDrawAction = (payload) => {
  return {
    type: WITHDRAW,
    payload: payload,
  };
};
