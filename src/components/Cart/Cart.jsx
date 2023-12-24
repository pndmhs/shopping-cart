import styles from './Cart.module.css'
import { FaRegTrashCan } from "react-icons/fa6"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"

const CartItem = ({ name, price, }) => {
  return (
    <div className={styles['cart-item']}>
      <div className={styles['item-img']}></div>
      <h2>{name}</h2>
      <div className={styles['delete-icon']}>
        <FaRegTrashCan />
      </div>
      <p className={styles['item-price']}>${price}</p>
      <div className={styles.quantity}>
        <div className={styles['quantity-icon']}>
          <AiOutlineMinus size={12} />
        </div>
        <input type="number" name="Quantity" value={1}/>
        <div className={styles['quantity-icon']}>
          <AiOutlinePlus size={12} />
        </div>
      </div>
    </div>
  )
}

const Cart = ({ handleClose }) => {
  return (
    <div className={styles['cart-container']}>
      <div className={styles['cart-background']} onClick={() => handleClose()}></div>
      <div className={styles.cart}>
        <div className={styles['cart-header']}>
          <h1>Shopping Bag</h1>
          <div className={styles['close-btn']} onClick={() => handleClose()}>
            <AiOutlineClose size={24} />
          </div>
        </div>
        <div className={styles['cart-list']}>
          <CartItem name={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99} />
          <CartItem name={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99} />
        </div>
        <div className={styles.total}>
          <p>Total:</p>
          <p>$199.99</p>
        </div>
        <button className={styles['checkout-btn']}>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart