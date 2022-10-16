import { Container, Row, Col } from "reactstrap";
import html from "../../assests/images/html.png";
import css from "../../assests/images/css.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "HTML pour les enfants",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: html,
  },

  {
    id: "02",
    title: "Rendre son site beau par le CSS",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: css,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Nos cours de 14 à 16 ans</h2>
                <p>
                  Nous dispensons les cours en html et css
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="6" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
