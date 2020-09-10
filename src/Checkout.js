import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          className='checkout__ad'
        />
        <div className='checkout__title'>
          <h3>Hello {user?.email}</h3>
          <h2>Your shopping Basket</h2>
          {basket.map(({ id, title, image, price, rating }) => (
            <CheckoutProduct
              id={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
