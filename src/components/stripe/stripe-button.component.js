import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ja3C9Hk1f7NDNCnjfBp3ixGqG8DNLuV4cQC1ID2OMihzQWV79zLoPdTp5Fm5lbhql8eNAYT6vZQ2nkCNwMljwk800uKVEIpZI';


  const onToken = token => {
    console.log(token);
    alert('Payment Successful'); 
  }

  return (
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;