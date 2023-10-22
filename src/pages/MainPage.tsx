import { useEffect } from "react";
import { BankInfoType, RootStoreType } from "../redux/BankInfo.type";
import { useDispatch, useSelector } from "react-redux";
import { addBankInfo } from "../redux/Bank.actions";
import Card from "../componets/Card/Card";
import { fetchAPI } from "../utils/fetchAPI";
import { fetchLocalStorage } from "../utils/fetchLocalStorage";

const MainPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const banks = useSelector((state: RootStoreType) => state.bankStore);

  const fetchBankList = async () => {
    //Getting info from LocalStorage
    const storedBankObjects = fetchLocalStorage();
    if (storedBankObjects) {
      storedBankObjects.forEach((element) => {
        dispatch(addBankInfo(element));
      });
      return;
    }
    //Getting from API
    const data: false | BankInfoType[] = await fetchAPI(
      "https://dev.obtenmas.com/catom/api/challenge/banks"
    );
    if (!data) return;
    data.forEach((element) => {
      dispatch(addBankInfo(element));
    });
    localStorage.setItem("bankObjects", JSON.stringify(data));
  };

  useEffect(() => {
    fetchBankList();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-4">Listado de bancos</h1>
      <div className="flex flex-wrap">
        {banks.map((bank) => (
          <Card bankInfo={bank} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
