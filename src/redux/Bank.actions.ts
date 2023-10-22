import { BankInfoType } from "./BankInfo.type";

export const addBankInfo = (bankInfo: BankInfoType) => ({
  type: 'ADD_BANK_INFO',
  payload: bankInfo,
});

export const removeBankInfo = (bankName: string) => ({
  type: 'REMOVE_BANK_INFO',
  payload: bankName,
});
