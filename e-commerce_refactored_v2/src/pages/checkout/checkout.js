import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import { CartContext } from '../../providers/cart/cart.provider';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';


const CheckoutPage = ({ total }) => {
    const { cartItems } = useContext(CartContext);
    
    return (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>     
            </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CCV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)};

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
