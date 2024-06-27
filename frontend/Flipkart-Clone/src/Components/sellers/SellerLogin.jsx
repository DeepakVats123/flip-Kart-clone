import { useFormik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

export default function SellerLogin() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        onSubmit: (values) => {
            if(values.email==='admin@gmail.com' && (values.password==='bkabhi'||values.password==='admin')){
                navigate('/products/sellers/addProducs')
            }else{
                alert(JSON.stringify("Please Enter Admin Password"));
            }
        }
    });
    return (
        <Flex bg="gray.100" align="center" justify="center" h="60vh">
            <Box bg="white" p={6} rounded="md">
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </FormControl>
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            isChecked={formik.values.rememberMe}
                            colorScheme="purple"
                        >
                            Remember me?
                        </Checkbox>
                        <Button type="submit" bg="rgb(40, 116, 240)" color={'white'} width="full">
                            Login
                        </Button>
                    </VStack>
                </form>
            </Box>
        </Flex>
    );
}