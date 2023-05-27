import cart from '../../assets/cart.svg'
import './CartWidget.scss'

const CartWidget = () => {
    return (
        <div className="header_cart_container">
            <img className=" header_cart_img" src={cart} alt='cart-widget'/>
           <h5 >0</h5>
        </div>
    )
}

export default CartWidget