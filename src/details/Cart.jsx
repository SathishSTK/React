const Cart = ({ cart, dispatchCart }) => {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page">

      <div className="page-heading">
        <span>YOUR SHOPPING CART</span>
        <h1>Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (

        <div className="empty-box">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to continue shopping.</p>
        </div>

      ) : (

        <>

          <div className="cart-list">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div>
                  <h3>{item.title}</h3>

                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() =>
                    dispatchCart({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Total: ${total.toFixed(2)}
            </h2>

            <button
              className="primary-btn"
              onClick={() =>
                dispatchCart({
                  type: "CLEAR_CART",
                })
              }
            >
              Clear Cart
            </button>

          </div>

        </>

      )}

    </div>
  );
};

export default Cart;