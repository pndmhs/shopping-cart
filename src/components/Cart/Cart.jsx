import styles from './Cart.module.css'

const CartItem = ({ name, price, }) => {
  return (
    <div className={styles['cart-item']}>
      <div className={styles['item-img']}></div>
      <h2>{name}</h2>
      <p className={styles['item-price']}>${price}</p>
    </div>
  )
}

const Cart = ({ handleClose }) => {
  return (
    <div className={styles['cart-container']} onClick={(e) => handleClose(e)}>
      <div className={styles.cart}>
        <h1>Shopping Bag</h1>
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