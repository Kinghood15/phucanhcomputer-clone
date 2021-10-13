import Login from '../Login';
import Register from '../Register';
import HomeClient from '../HomeClient';
import ProductCategoryClient from '../ProductCategoryClient';
import ProductDetailsClient from '../ProductDetailsClient';
import Home from '../Home';
import ProductCategory from '../ProductCategory';
import ProductDetails from '../ProductDetails';
import ProductCart from '../ProductCart';
import { AuthClientContext } from '../contexts/AuthClientContext';
import { useContext,useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {Redirect} from 'react-router-dom';
import {ProductContext} from '../contexts/ProductContext';
const AuthClient = ({ authRoute }) => {
    const {productState:{
        products,productLoading
    }, getQuantityProductsbyId} = useContext(ProductContext);
    const [cartItems,setCartItems] = useState([{}]);
    const AddProductItem = (product) =>{
        const ProductExists = cartItems.find((item) => item._id === product._id);
        if(ProductExists) {
            getQuantityProductsbyId(product._id);
            if(products.supplierinvoice !== undefined){
                const MaxQuantity = products.supplierinvoice.quanlityDetails;
                if(ProductExists.quantity < MaxQuantity){
                    setCartItems(cartItems.map((item) => item._id === product._id ? {...ProductExists,quantity:ProductExists.quantity + 1} : item));
                }
                else{
                    alert(`Bạn chỉ chọn tối thiểu ${MaxQuantity} sản phẩm`);
                }
            }
            else{
                alert('Sản phẩm đã vào giỏ hàng !');
            }
            
        } else{
            setCartItems([...cartItems,{...product,quantity:1}])
        }
    }
    const RemoveProductItem= (product) => {
        const ProductExists = cartItems.find((item) => item._id === product._id);
        if(ProductExists.quantity === 1) {
            setCartItems(cartItems.filter((item) => item._id === product._id ));
        } else{
            setCartItems(cartItems.map((item) => item._id === product._id ? {...ProductExists,quantity:ProductExists.quantity - 1} : item));
        }
    };
    const { authClientState: {authClientLoading,isAutherticated}} = useContext(AuthClientContext);
    if(authClientLoading){
        return(
        <Spinner style={{padding:"30px",margin:"auto",marginTop:"100px"}} animation="border" role="status" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        );
    }
    else if(isAutherticated){
        return(
            <>
                <Redirect to='/' />
                {authRoute === 'home' && <HomeClient/>}
                {authRoute === 'productcategory' && <ProductCategoryClient/>}
                {/* {authRoute === 'productdetails' && <ProductDetailsClient/>} */}
            </>
        );
    }
    else {
        return(
            <>
                {authRoute === 'login' && <Login/>}
                {authRoute === 'register' && <Register/>}
                {authRoute === 'home' && <Home AddProductItem={AddProductItem} cartItems={cartItems}/>}
                {authRoute === 'productcategory' && <ProductCategory AddProductItem={AddProductItem} cartItems={cartItems} />}
                {authRoute === 'productdetails' && <ProductDetails AddProductItem={AddProductItem} cartItems={cartItems}/>}
                {authRoute === 'productcart' && <ProductCart cartItems={cartItems} AddProductItem={AddProductItem} RemoveProductItem={RemoveProductItem} />}
            </>
        );
    }
}

export default AuthClient;

