import React from "react";
import { Container, Row, Col,Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import kids from "../../assests/images/kids.jpg";
import ecran from "../../assests/images/ecran.gif";
import web from "../../assests/images/web.gif";
import computer from "../../assests/images/computer.gif";
import "./hero-section.css";
import Modale from "../modale/Modale";

const HeroSection = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="shadow-sm">
            <Col lg="6" md="6">
              <div className="hero__content">
                <h2 className="mb-3 hero__title">
                  Les enfants peuvent <br /> aussi <span style={{fontSize:60, color:'#B300FF'}}>coder !!!</span>
                </h2>
                <p className="mb-3">
                Nous formons la prochaine génération <br /> à la programmation 
                afin de développer  <br /> leur creativité et 
                facilité d'apprentissage.
                </p>
              </div>
              <div className="d-flex">
                <div style={{width:80, height:80, borderRadius:200}}><img style={{width:'100%', height:'100%',borderRadius:200}} src={ecran} alt="" /></div>
                <div style={{width:80, height:80, borderRadius:200,marginLeft:20, border:'5px solid yellow'}}><img style={{width:'100%', height:'100%',borderRadius:200}} src={web} alt="" /></div>
                <div style={{width:80, height:80, borderRadius:200, marginLeft:20, border:'5px solid purple'}}><img style={{width:'100%', height:'100%',borderRadius:200}} src={computer} alt="" /></div>
              {/* <Modale/> */}
              </div>
            </Col>

            <Col lg="6" md="6">
              <img style={{marginTop:80, borderRadius:12}}src={kids} alt="" className="w-100 hero__img shadow-lg mb-3" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Modale/> */}
    </>
  );
};

export default HeroSection;
