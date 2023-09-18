import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import newRequest from '../../utils/newRequest'
import { useParams } from 'react-router-dom';
import CheckoutForm from '../../components/checkout_form/CheckoutForm';

const stripePromise = loadStripe('pk_test_51NreHSEhnvlFawz2YbXJ2qQ8tvp78FbY250yE2X1NNjKkWkQor2Sne2ZklJHy6i6Q21CsPi3uqW6IXv9rgDTrZ1i00nfK4c8z4');

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
        try {
            const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
            setClientSecret(res.data.client_secret);
        } catch(err) {
            console.log(err);
        }
    }
    makeRequest();
  }, []);

  const apperance = {
    theme: 'stripe'
  };

  const options = {
    clientSecret,
    apperance
  }

  return (
    <div className='pay'>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        )}
    </div>
  )
}

export default Pay