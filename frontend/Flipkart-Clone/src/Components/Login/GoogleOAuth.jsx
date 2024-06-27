import { Center, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import { CartContext } from "../Context/CartContext";

export default function GoogleOAuth() {
  const { correct, setCorrect, name, setName } = useContext(Authcontext);
  const {getData} = useContext(CartContext);

  const naivigate = useNavigate();
  const param = new URLSearchParams(window.location.search);
  const code = param.get("code");
  const getUsersData = async () => {
    const res = await axios.get(
      `https://flipkart-api-new.onrender.com/auth/googleOAuth?code=${code}`
    );
    console.log(res, 'data here');
    const { status, token, name, id, email } = res.data;
    if (status === "success") {
      setCorrect(true);
      setName(name)
      localStorage.setItem("loginsetName", name);
      localStorage.setItem("email", email);
      localStorage.setItem("flipkartToken", token);
      localStorage.setItem("flipkartUserName", name);
      localStorage.setItem("flipkartUserId", id);
      // getData();
      naivigate("/");
    } else {
      alert(res.data.message);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div style={{height: "350px"}} >
      <Center mt='300px'><Spinner size='xl' /></Center>
    </div>
  );
}
