import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Cart.module.css";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const {
    shoppingCart,
    itemQuantity,
    sum,
    deleteItem,
    findItem,
    totalPriceShipping,
    formattedTotalPrice,
  } = useContext(CartContext);

  return (
    <>
      <Header></Header>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "transparent" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>

                          <MDBTypography className="mb-0 text-muted">
                            {sum === 0 && <p>No items in cart!</p>}
                            {sum > 0 && <p>{`${sum} items in cart!`}</p>}
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />

                        {[...shoppingCart]?.map((el) => (
                          <div key={el}>
                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                              <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage
                                  src={el.src}
                                  fluid
                                  className="rounded-3"
                                />
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography tag="h6" className="text-muted">
                                  {el.title}
                                </MDBTypography>
                                <MDBTypography
                                  tag="h6"
                                  className="text-black mb-0"
                                >
                                  {el.color}
                                </MDBTypography>
                                <MDBTypography
                                  tag="h6"
                                  className="text-black mb-0"
                                >
                                  {el.gender} - {el.size}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                              >
                                <MDBBtn color="link" className="px-2">
                                  <MDBIcon fas icon="minus" />
                                </MDBBtn>

                                <MDBInput
                                  onChange={(event) => {
                                    itemQuantity(event.target.value, el);
                                  }}
                                  type="number"
                                  min="1"
                                  defaultValue={el.quantity}
                                />
                                <div className={styles.iconTrash}>
                                  <FontAwesomeIcon
                                    onClick={() => {
                                      deleteItem(el.id);
                                    }}
                                    icon={faTrash}
                                  />
                                </div>
                                <MDBBtn color="link" className="px-2">
                                  <MDBIcon fas icon="plus" />
                                </MDBBtn>
                              </MDBCol>
                              <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                  {`$${el.price.toFixed(2) * el.quantity}`}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="1" lg="1" xl="1" className="text-end">
                                <a href="#!" className="text-muted">
                                  <MDBIcon fas icon="times" />
                                </a>
                              </MDBCol>
                            </MDBRow>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <MDBCardText
                              tag="a"
                              href="#!"
                              className="text-body"
                            >
                              <Link className={styles.link} to="/shop">
                                Back to shop
                              </Link>
                            </MDBCardText>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            {`${sum} items`}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            {formattedTotalPrice}
                          </MDBTypography>
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Shipping
                          </MDBTypography>
                          <MDBTypography
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            € 5.00
                          </MDBTypography>
                        </div>

                        {/*<div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>*/}

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" label="Enter your code" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            TOTAL
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            {totalPriceShipping}
                          </MDBTypography>
                        </div>

                        <Link className={styles.linkPayment} to="/payment">
                          Payment
                        </Link>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer></Footer>
    </>
  );
}
