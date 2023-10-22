import { combineReducers } from "redux";
import type { ActionType, BankInfoType } from "./BankInfo.type";

const initialState: BankInfoType[] = [];

const bankReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'ADD_BANK_INFO':
      return [...state, action.payload];
    case 'REMOVE_BANK_INFO':
      return state.filter(bank => bank.bankName !== action.payload.bankName);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
bankStore: bankReducer,
})