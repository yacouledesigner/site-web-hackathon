import React from "react";
import { Container, Row, Col } from "reactstrap";
import kids from "../../assests/images/kids.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Les enfants peuvent <br /> aussi <span style={{fontSize:60, color:'#B300FF'}}>coder !!!</span>
              </h2>
              <p className="mb-5">
              Nous formons la prochaine génération <br /> à la programmation 
              afin de developper  <br /> leur creativité et 
              facilité d'apprentissage.
              </p>
            </div>
            <div className="search">
              <button>S'inscrire</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img style={{marginTop:80, borderRadius:12}}src={kids} alt="" className="w-100 hero__img shadow-lg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
