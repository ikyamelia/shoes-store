import {useSelector, useDispatch} from 'react-redux'
import Headers from './components/Headers';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';
import iconCart from '../assets/cart.svg'
import iconArrowRight from '../assets/arrow_right.svg'
import iconClose from '../assets/close.svg'
import imageProduct from '../assets/product.png'
import { deleteCart } from '../actions/action';
import Badge from '@material-ui/core/Badge';

const Cart = () => {
    const dispatch = useDispatch()

    const carts = useSelector(state => {
        if (state.cart) return state.cart
        else return []
    })

    const count = useSelector(state => {
        let temp = 0
        if (state.cart) state.cart.map(value => temp+=value.qty)
        return temp
    })

    const totalcart = useSelector(state => {
        let temp = 0
        if (state.cart) state.cart.map(value => temp+=(value.qty*value.product.price))
        return temp
    })    

    const removeFromCart = cart => {
        if (cart) {
            dispatch(deleteCart(cart))
        }
    }

    return (
        <>
            <Headers />
            <Container maxWidth="lg">
                <Navbar />
                <div className="cart-title-container"> 
                    <h1 className="title-category">Your Bag</h1>
                    <Badge className="cart-icon" badgeContent={count} color="secondary">
                        <img src={iconCart} alt="iconCart" />
                    </Badge>
                </div>

                <div className="cart-container">
                    <div className="cart-item-container">
                        <p className="cart-item-product colum-center column-header">PRODUCT</p>
                        <p className="cart-item-column column-header">PRICE</p>
                        <p className="cart-item-column column-header">QUANTITY</p>
                        <p className="cart-item-column column-header">TOTAL</p>
                    </div>

                    {carts.map((value, index) => {
                        return (
                            <div key={index} className="cart-item-container">
                                <div className="cart-item-product">
                                    <img onClick={() => removeFromCart(value)} className="cart-item-product-delete" src={iconClose} alt="iconClose" />
                                    <img className="cart-item-product-image" src={imageProduct} alt="imageProduct" />
                                    <div className="cart-item-product-desc-container">
                                        <p className="cart-item-product-title">{value.product.name}</p>
                                        <div className="cart-item-product-desc">
                                            <p className="cart-item-product-text">Size: {value.size}</p>
                                            <p className="cart-item-product-text cart-item-spacer">Color</p>
                                            <div className="cart-item-product-color cart-item-spacer" style={{backgroundColor: value.color.color_hash}}/>
                                        </div>
                                    </div>
                                </div>
                                <p className="cart-item-column">${value.product.price}</p>
                                <p className="cart-item-column">{value.qty}</p>
                                <p className="cart-item-column cart-total-text">${value.qty*value.product.price}</p>
                            </div>
                        )
                    })}
                    <div className="cart-total-container">
                        <div className="cart-total-spacer"/>
                        <div className="cart-total-right">
                            <div className="cart-total">
                                <p className="cart-total-text">TOTAL</p>
                                <p className="cart-total-text">${totalcart}</p>
                            </div>

                            <div className="cart-paynow">
                                <p className="cart-paynow-text">PAY NOW</p>
                                <img src={iconArrowRight} alt="iconArrowRight"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </Container>
        </>
    )
}

export default Cart;