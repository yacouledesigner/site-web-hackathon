import { Container, Row, Col } from "reactstrap";
import code from "../../assests/images/code.gif";
// import css from "../../assests/images/css.png";
import jeux from "../../assests/images/jeux.png";
import cours1 from "../../assests/video/cours1.mp4";
import Iframe from 'react-iframe'
import "./courses.css";
// import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "HTML pour les enfants",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: cours1,
  },

  {
    id: "02",
    title: "Rendre son site beau par le CSS",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: jeux,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 lg-12">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-100 d-flex align-items-center">
                <img style={{width:50, height:50}} src={code} alt="" />
                <h2 style={{fontWeight:'bolder',marginLeft:20,paddingTop:10}}> Vous avez entre  <span style={{color:'#FFCC00'}}>08</span> et <span style={{color:'#B300FF'}}>14</span>  ans ? Apprennez tout en jouant</h2>
              </div>

            </div>
          </Col>
          {/* {coursesData.map((item) => ( */}
          <Col lg="5" md="6" sm="12" className='d-flex flex-column justify-content-center align-items-center rounded' style={{backgroundColor:'#00CCCC',height:500}}>
              {/* <CourseCard key={item.id} item={item} /> */}
              <div>
                <img src={jeux} alt="" />
              </div>
              <h2>EliteCoding</h2>
              <p>Explore le code grâce au foot</p>
              <a href="http://192.168.1.115:4200/home" target='_blank' class="btn btn-warning">Démarrer</a>
          </Col>
          <Col lg="5" md="6" sm="12">
            <video className="shadow-sm" style={{height:500,width:700,marginLeft:30, borderRadius:20, border:'1px solid black'}} src={cours1} controls></video>
            <legend className="h1" style={{marginLeft:250}}>Vidéo de cours</legend>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
