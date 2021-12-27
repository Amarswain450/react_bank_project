import { DEPOSITE, WITHDRAW } from '../constants/types';

const initialState = {
  details: [
    {
      currentDate: new Date().toLocaleDateString(),
      currentTime: new Date().toLocaleTimeString(),
      type: 'initial',
      amount: 5000,
    },
  ],
  amountData: 5000,
};

const bankReducer = (state = initialState, action) => {
  let currentDate = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();
  switch (action.type) {
    case DEPOSITE:
      return {
        ...state,
        amountData: state.amountData + action.payload,
        details: state.details.concat({
          currentDate,
          currentTime,
          type: 'credit',
          amount: action.payload,
        }),
      };

    case WITHDRAW:
      return {
        ...state,
        amountData:
          state.amountData > 5000
            ? state.amountData - action.payload
            : state.amountData,
        details: state.details.concat({
          currentDate,
          currentTime,
          type: 'debit',
          amount: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default bankReducer;
