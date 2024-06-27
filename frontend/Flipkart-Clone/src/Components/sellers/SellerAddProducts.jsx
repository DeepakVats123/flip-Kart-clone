import { useFormik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Input,
    VStack
} from "@chakra-ui/react";

export default function SellerAddProducts() {
    const formik = useFormik({
        initialValues: {
            rememberMe: false
        },
        onSubmit: (values) => {
            delete values.email 
            delete values.password
            delete values.rememberMe
            // alert(JSON.stringify(values, null, 2))
            console.log(values);
            let data = {
                ...values,
                description: values.title,
                old_price: +values.old_price,
                new_price: +values.new_price,
                quantity: +values.quantity,
                discount: +values.discount,
                hidden_stars: +values.hidden_stars,
                item_id: +values.item_id,
            }
            fetch(`https://flipkart-api-new.onrender.com/products/create`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                },
            }).then((res)=>res.json())
            .then((res)=>{
                alert("Successfully Added");
                console.log(res, " in seller ");
            })
        }
    });
    return (
        <Flex bg="gray.100" align="center" justify="center">
            <Box bg="white" p={6} rounded="md" margin="30px 0">
                <form onSubmit={formik.handleSubmit}>
                    <Grid spacing={4} templateColumns='repeat(3, 1fr)' gap={6} align="flex-start">
                        <FormControl>
                            <FormLabel>Category Name</FormLabel>
                            <Input
                                id="category_name"
                                name="category_name"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.category_name}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                id="title"
                                name="title"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input
                                id="image"
                                name="image"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Old Price</FormLabel>
                            <Input
                                id="old_price"
                                name="old_price"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.old_price}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>New Price</FormLabel>
                            <Input
                                id="new_price"
                                name="new_price"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.new_price}
                            />
                        </FormControl>
                        
                        <FormControl>
                            <FormLabel>Warranty</FormLabel>
                            <Input
                                id="warranty"
                                name="warranty"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.warranty}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Delivery Type</FormLabel>
                            <Input
                                id="delivery_type"
                                name="delivery_type"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.delivery_type}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Size</FormLabel>
                            <Input
                                id="size"
                                name="size"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.size}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                id="quantity"
                                name="quantity"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.quantity}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Discount</FormLabel>
                            <Input
                                id="discount"
                                name="discount"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.discount}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Hidden Stars</FormLabel>
                            <Input
                                id="hidden_stars"
                                name="hidden_stars"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.hidden_stars}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Brand</FormLabel>
                            <Input
                                id="brand"
                                name="brand"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.brand}
                            />
                        </FormControl>
                        {/* item_id */}
                        <FormControl>
                            <FormLabel>Item Id</FormLabel>
                            <Input
                                id="item_id"
                                name="item_id"
                                type="text"
                                variant="filled"
                                onChange={formik.handleChange}
                                value={formik.values.item_id}
                            />
                        </FormControl>
                        
                    </Grid> 
                        <Box width={'50%'} m='auto'>
                        <Checkbox
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            isChecked={formik.values.rememberMe}
                            colorScheme="purple"
                            m={4}
                        >
                            Remember me?
                        </Checkbox>
                        <Button type="submit" bg="rgb(40, 116, 240)" color={'white'} width="full">
                            Add Product
                        </Button>
                        </Box>
                </form>
            </Box>
        </Flex>
    );
}