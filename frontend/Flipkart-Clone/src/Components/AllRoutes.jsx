import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Cart/CartPage'
import ConsratsPage from './Cart/CongratsPage'
import DeliveryPage from './Cart/DeliveryPage'
import OtpPgae from './Cart/OtpPage'
import PaymentPage from './Cart/PayemntPage'
import Summary from './Cart/Summary'
import PrivateRoutes from './Context/PrivateRoutes'
import Home from './Home/Home'
import GoogleOAuth from './Login/GoogleOAuth'
import { Login } from './Login/Login'
import OrderPage from './OrderPage/OrderPage'
import Products from './Products.jsx/Products'
import Viewpage from './ProductsView.jsx/Viewpage'
import SellerAddProducts from './sellers/SellerAddProducts'
import SellerLogin from './sellers/SellerLogin'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products/:category_name' element={<Products/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/view/:item_id' element={<Viewpage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route  path="/delivery" element={
                    <PrivateRoutes>
                    <DeliveryPage/>
                    </PrivateRoutes>
                    }  />
                <Route  path="/summary" element={<Summary/>}  />
                <Route  path="/payment" element={
                    <PrivateRoutes> 
                        <PaymentPage/> 
                    </PrivateRoutes>
                    }/>
                <Route  path="/otp" element={
                    <OtpPgae/>
                    }/>
                <Route  path="/congo" element={
                    <ConsratsPage/>
                    }/>
                <Route path='/orderpage' element={
                    <PrivateRoutes>
                        <OrderPage/>
                    </PrivateRoutes>
                }/>
                <Route path='/google_OAuth' element={<GoogleOAuth/>} />
                <Route path='/login' element={<Login/>}></Route>

                <Route path='/sellers' element={<SellerLogin/>}/>
                <Route path='/products/sellers/addProducs' element={<SellerAddProducts/>} />
            </Routes>
        </>
    )
}

export default AllRoutes