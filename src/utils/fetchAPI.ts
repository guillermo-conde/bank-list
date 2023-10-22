import { BankInfoType } from "../redux/BankInfo.type";

/**
 * Fetches data from a given URL and returns the result as a Promise.
 *
 * @async
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<false | BankInfoType[]>} A Promise that resolves to either an array of BankInfoType objects or false if an error occurs.
 * @throws {Error} Throws an error if the HTTP request fails.
 * @example
 * 
 * const data = await fetchAPI("https://some-api.com/data");
 * if (data !== false) {
 *   // Do something with the data
 * }
 */
export const fetchAPI = async (url: string): Promise<false | BankInfoType[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return false;
  }
};