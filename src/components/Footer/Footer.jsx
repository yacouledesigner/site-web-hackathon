import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  // {
  //   display: "Accueil",
  //   url: "#",
  // },
  // {
  //   display: "Qui sommes nous ?",
  //   url: "#",
  // },

  // {
  //   display: "Cours",
  //   url: "#",
  // },
];

// const footerInfoLinks = [
//   {
//     display: "Privacy Policy",
//     url: "#",
//   },
//   {
//     display: "Membership",
//     url: "#",
//   },

//   {
//     display: "Purchases Guide",
//     url: "#",
//   },

//   {
//     display: "Terms of Service",
//     url: "#",
//   },
// ];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
            <span style={{color:'#FFCC00'}}>Learn</span><span style={{color:'#B300FF'}}>-Elites</span>
            </h2>

            {/* <div className="follows">
              <p className="mb-0">Suivez-nous</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div> */}
          </Col>

          {/* <Col lg="4" md="6" className="mb-4"> */}
            {/* <h6 className="fw-bold">Liens Utiles</h6> */}
            {/* <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))} */}
            {/* </ListGroup> */}
          {/* </Col> */}

          {/* <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col> */}

          {/* <Col lg="8" md="6" className='d-flex'>
            <p> <strong>Addresse:</strong>  Abidjan Mall</p>
            <p style={{marginLeft:50}}> <strong>Email:</strong> troupeselites@gmail.com</p>
          </Col> */}

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
