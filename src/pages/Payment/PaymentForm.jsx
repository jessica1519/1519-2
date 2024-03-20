import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import styles from "./Payment.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";

const PaymentForm = () => {
  const { totalPriceShipping, normalShipping, formattedTotalPrice } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const sendPaymentDataToServer = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 20000, currency: "USD" }),
        }
      );
      console.log(response, "response");

      if (!response.ok) {
        throw new Error("Failed to send payment data to server");
      }

      // Handle success response from the server
    } catch (error) {
      console.error("Error sending payment data to server:", error.message);
      // Handle error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: e.target.name.value,
        email: e.target.email.value,
      },
    });

    //sendPaymentDataToServer();
    // Inside handleSubmit after createPaymentMethod
    const response = await fetch("http://localhost:3001/process-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payment_method_id: paymentMethod.id,
        //amount:{}
      }),
    });

    //const responseData = await response.json();

    if (response.ok) {
      // Payment succeeded, handle success
      // For example, show a success message to the user
      alert("Payment successful! Thank you for your purchase.");

      // Redirect to a thank you page
      // window.location.href = '/thank-you'; // Replace '/thank-you' with your actual thank you page URL
    } else {
      // Payment failed, handle error
      alert("Payment failed. Please try again.");
    }

    setLoading(false);

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Handle successful payment
      //const paymentMethodId = result.paymentMethod.id;
      // Example: sendPaymentDataToServer(paymentMethodId);
    }
  };

  return (
    <>
      <Header></Header>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "transparent" }}
      >
        <MDBContainer className="py-5 h-100">
          <Link className={styles.link} to="/form-shipping">
            « Back to shipping
          </Link>
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="5">
              <MDBCardBody className={styles.cardBody}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h5" className="mb-0">
                    We accept
                  </MDBTypography>
                </div>
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody>
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <MDBCardImage
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </MDBCardBody>
                </MDBCard>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">{formattedTotalPrice}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping</p>
                  <p className="mb-2">{normalShipping}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total(Incl. taxes)</p>
                  <p className="mb-2">{totalPriceShipping}</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  <label className="mb-4">
                    Name / Surname
                    <input
                      type="text"
                      name="name"
                      placeholder="Name / Surname"
                      required
                    />
                  </label>

                  <label className="mb-4">
                    Email
                    <input type="email" name="email" required />
                  </label>
                  <CardElement />

                  <div className={styles.containerBtn}>
                    <button
                      type="submit"
                      disabled={!stripe || loading}
                      className={styles.btnPayment}
                    >
                      Pay Now
                    </button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
};

export default PaymentForm;
