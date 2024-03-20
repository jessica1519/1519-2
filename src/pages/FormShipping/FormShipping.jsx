import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import styles from "./FormShipping.module.css";
import Footer from "../../components/Footer/Footer";
export default function FormShipping() {
  const { totalPriceShipping, normalShipping, formattedTotalPrice } =
    useContext(CartContext);
  return (
    <>
      <Header></Header>
      <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
        <MDBRow>
          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Biling details
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label="First name" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="Last name" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol className="col-6">
                      <MDBInput label="City" type="text" required />
                    </MDBCol>

                    <MDBCol className="col-2">
                      <MDBInput label="Province" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="State" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol className="col-6">
                      <MDBInput label="Street" type="text" />
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBInput label="Number" type="text" />
                    </MDBCol>
                    <MDBCol className="col-3">
                      <MDBInput label="Zip" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label="Phone" type="text" />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="Email" type="text" />
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Summary
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBListGroup>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{formattedTotalPrice}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between border-0 align-items-center px-0">
                    Shipping
                    <span>{normalShipping}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{totalPriceShipping}</strong>
                    </span>
                  </MDBListGroupItem>
                </MDBListGroup>

                <Link className={styles.linkPayment} to="/payment">
                  Payment
                </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <Footer></Footer>
    </>
  );
}
