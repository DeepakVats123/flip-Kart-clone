import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, HStack, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontext";
import { CartContext } from "../Context/CartContext";

function OtpPgae() {

const [realOtp, setRealOtp] = useState('');
const [state, setState] = useState(0);
const [forwardCongo, setForwardCongo] = useState(false);
const {value} = useContext(Authcontext);
const navigate = useNavigate();

const { cartData, SetCartData, getData, setOrderpageData, orderpageData } = useContext(CartContext);
    
    const toast = useToast()
    

    
    useEffect(()=>{
      window.scrollTo(0, 0)
    }, []);

const handelgetOtp=(e)=>{

    setRealOtp(realOtp+ e.target.value);
}
console.log(realOtp);


const handelSubmitOtp= ()=>{
  console.log(realOtp, value,realOtp == value, "fsjhfgsjkh");
  
  if(realOtp == value){
      navigate('/congo')
      setForwardCongo(true);
    }else{
      setRealOtp('');
        toast({
            position: 'top',
            render: () => (
              <Box color='white' rounded={'10'} p={3} bg='red' display={'flex'} alignItems='center' >
                <InfoIcon/>
                <Text  ml='2' fontWeight={'bold'} color='white'  >Enter Correct Otp</Text>
              </Box>
            ),
          })
        console.log(realOtp);
        console.log(value, "RANDOM");
    }
    
}

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      w="100%"
      h="100vh"
      bg="#f1f3f6"
    >
      <Box h="40vh" w="25%" bg="white" display='grid' justifyContent={'center'} alignItems='center'  shadow={"sm"} borderRadius={"4"}>
        <Heading>ENTER OTP</Heading>
        <HStack  mt='-10'   >
          <PinInput placeholder="-"  >
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
            <PinInputField onChange={handelgetOtp}/>
          </PinInput>
        </HStack>
        <Button mt='-10' onClick={handelSubmitOtp} >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default OtpPgae;
