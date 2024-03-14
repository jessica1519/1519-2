import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";

import styles from "./Payment.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";

export default function Pay() {
  const { totalPriceShipping, normalShipping, formattedTotalPrice } =
    useContext(CartContext);

  return (
    <>
      <Header></Header>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "transparent" }}
      >
        <MDBContainer className="py-5 h-100">
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

                <form className="mt-4">
                  <MDBInput
                    className="mb-4"
                    label="Cardholder's Name"
                    type="text"
                    size="lg"
                    placeholder="Cardholder's Name"
                    contrast
                  />

                  <MDBInput
                    className="mb-4"
                    label="Card Number"
                    type="text"
                    size="lg"
                    minLength="19"
                    maxLength="19"
                    placeholder="1234 5678 9012 3457"
                    contrast
                  />

                  <MDBRow className="mb-4">
                    <MDBCol md="6">
                      <MDBInput
                        className="mb-4"
                        label="Expiration"
                        type="text"
                        size="lg"
                        minLength="7"
                        maxLength="7"
                        placeholder="MM/YYYY"
                        contrast
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        className="mb-4"
                        label="Cvv"
                        type="text"
                        size="lg"
                        minLength="3"
                        maxLength="3"
                        placeholder="&#9679;&#9679;&#9679;"
                        contrast
                      />
                    </MDBCol>
                  </MDBRow>
                </form>

                <hr />

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">{formattedTotalPrice}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2"></p>
                  <p className="mb-2">{normalShipping}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total(Incl. taxes)</p>
                  <p className="mb-2">{totalPriceShipping}</p>
                </div>
                <div className={styles.containerBtn}>
                  <MDBBtn className={styles.btnPayment}>Pay Now</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
}
