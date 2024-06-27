import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {

  const googleRequest = async () => {

    // https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/google_OAuth&client_id=258927545029-6eh4839p1pmd7bcliakaoc2uq1stg1l1.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email
    
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    // const redirect_uri= `https://flipkartclone04.netlify.app/google_OAuth`
    const redirect_uri= `http://localhost:3000/google_OAuth`
    const client_id= '258927545029-6eh4839p1pmd7bcliakaoc2uq1stg1l1.apps.googleusercontent.com'
    const access_type= 'offline'
    const response_type= 'code'
    const prompt= 'consent'
    const scope= [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' ')

    window.location = `${rootUrl}?redirect_uri=${redirect_uri}&client_id=${client_id}&access_type=${access_type}&response_type=${response_type}&prompt=${prompt}&scope=${scope}`
  };



  let loginCheck = JSON.parse(localStorage.getItem("loginCheck")) || false
  console.log("test 2 login local ", typeof loginCheck, loginCheck, localStorage.getItem("flipkartUserName"));


  let loginsetName = localStorage.getItem("loginsetName") || localStorage.getItem("flipkartUserName") || "Login"
  const [name, setName] = useState(loginsetName);
  const [value, setValue] = useState(0);

  const [correct, setCorrect] = useState(loginCheck)

  localStorage.setItem("loginCheck", JSON.stringify(correct));
    // console.log(correct, " test corret ");
    // const [isAuth, setIsAuth] = useState(false);
  
    // const handleLogin = (body) => {
    //   fetch(`https://flipkart-data.onrender.com/User`, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(() => setIsAuth(true))
    //     .catch(() => setIsAuth(false));
    // };

  
    console.log(correct," check correct in context  ");
    return (
      <Authcontext.Provider value={{ correct, setCorrect, name, setName, googleRequest, value, setValue }}>
        {children}
      </Authcontext.Provider>
    );
  };
  
  export default AuthContextProvider;
  