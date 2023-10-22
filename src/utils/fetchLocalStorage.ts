import { BankInfoType } from "../redux/BankInfo.type";

/**
 * Retrieves stored bank objects from local storage.
 *
 * @returns {false | BankInfoType[]} Returns an array of BankInfoType objects if found in local storage, otherwise returns false.
 * @example
 * 
 * const data = fetchLocalStorage();
 * if (data) {
 *   // Do something with the data
 * }
 */
export const fetchLocalStorage = (): false | BankInfoType[] => {
    const storedBankObjects = localStorage.getItem("bankObjects");
    if (!storedBankObjects) return false

    return JSON.parse(storedBankObjects);
}