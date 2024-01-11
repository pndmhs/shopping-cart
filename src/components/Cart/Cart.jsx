import styles from './Cart.module.css'
import { FaRegTrashCan } from "react-icons/fa6"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import { useContext } from 'react'
import { ShopContext } from '../App/App'

const CartItem = ({ item }) => {
  const { changeQuantity, deleteProduct } = useContext(ShopContext)

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      deleteProduct(item.id)
      return
    }

    changeQuantity(item.id, item.quantity - 1)
  }

  const handleIncrease = (item) => {
    changeQuantity(item.id, item.quantity + 1)
  }

  return (
    <div className={styles['cart-item']}>
      <div className={styles['item-img']}>
        <img src={item.image} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
      <div className={styles['delete-icon']} onClick={() => deleteProduct(item.id)}>
        <FaRegTrashCan />
      </div>
      <p className={styles['item-price']}>${item.price}</p>
      <div className={styles.quantity}>
        <div className={styles['quantity-icon']} onClick={() => handleDecrease(item)}>
          <AiOutlineMinus size={12} />
        </div>
        <input type="number" name="Quantity" value={item.quantity} onChange={(e) => changeQuantity(item.id, e.target.value)}/>
        <div className={styles['quantity-icon']} onClick={() => handleIncrease(item)}>
          <AiOutlinePlus size={12} />
        </div>
      </div>
    </div>
  )
}

const Cart = ({ cartView, handleClose }) => {

  const { cartItems } = useContext(ShopContext)

  const totalPrice = (items) => {
    return items.reduce((total, curr) => total + (curr.price * curr.quantity), 0)
  }

  return (
    <div className={`${styles['cart-container']} ${cartView ? styles.show : ''}`}>
      <div className={styles['cart-background']} onClick={() => handleClose()}></div>
      <div className={`${styles.cart} ${cartView ? styles.show : ''}`}>
        <div className={styles['cart-header']}>
          <h1>Shopping Bag</h1>
          <div className={styles['close-btn']} onClick={() => handleClose()}>
            <AiOutlineClose size={24} />
          </div>
        </div>
        {
          cartItems.length === 0 ? <div>Nothing here</div>
          : (
            <>
              <div className={styles['cart-list']}>
                {
                  cartItems.map((item) => <CartItem key={item.id} item={item} />)
                }
              </div>
              <div className={styles.total}>
                <p>Total:</p>
                <p>${totalPrice(cartItems)}</p>
              </div>
              <button className={styles['checkout-btn']}>CHECKOUT</button>
            </>
          )
        }
        
      </div>
    </div>
  )
}

export default Cart