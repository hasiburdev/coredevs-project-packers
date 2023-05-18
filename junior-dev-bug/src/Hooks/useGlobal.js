import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";
const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);

  const toggleModal = () => setOpen(!open);

  const getPayment = async (body) => {
    const { data: agreementResponse } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/bkash/createPayment`,
      {
        ...body,
        totalPrice,
      }
    );
    window.location.replace(agreementResponse);
  };
  return {
    toggleModal,
    open,
    setMbCode,
    mbCode,
    getPayment,
    totalPrice,
    setTotalPrice,
  };
};
export default useGlobal;
