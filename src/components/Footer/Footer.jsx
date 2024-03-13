import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <a href="" className={styles.iconSocial}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="" className={styles.iconSocial}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="" className={styles.iconSocial}>
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </section>

          <section className="mb-4">
            <p>
              Se desideri qualsiasi tipo di informazione non esitare a
              contattarci!!
            </p>
          </section>

          <section className={`${styles.containerContact}`}>
            <MDBRow>
              <MDBCol lg="3" md="6" className="-4 mb-md-0">
                <h5 className="text-uppercase">E-MAIL</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      mailshop@gmail.com
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Telefono</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <h6 className="text-white">234456788997</h6>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">INDIRIZZO</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <h6 className="text-white">
                      Via Amerigo Vespucci 14 - Torino - 10139 - Italy
                    </h6>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        {/*<div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>*/}
      </MDBFooter>
    </div>
  );
}
