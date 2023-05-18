import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";
const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setOpen(!open);

  const getPayment = async (body) => {
    setLoading(true);
    const { data: agreementResponse } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/bkash/createPayment`,
      {
        ...body,
        totalPrice,
      }
    );
    setLoading(false);
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
    loading,
  };
};
export default useGlobal;
