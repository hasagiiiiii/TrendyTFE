import React from 'react';
import Pic1 from '../../assets/pic-1.jpg';
import Pic2 from '../../assets/pic-2.jpg';
import Pic3 from '../../assets/pic-3.jpg';
import Pic4 from '../../assets/pic-4.jpg';
import Pic5 from '../../assets/pic-5.jpg';
import Pic6 from '../../assets/about-img.svg';
import './index.css';
const About = () => {
  return (
    <div>
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={Pic6} alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolorum quasi illo? Distinctio expedita commodi, nemo a quam error
              repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur
              quaerat tenetur.
            </p>
            <a href="courses.html" className="inline-btn">
              our courses
            </a>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h3>+10k</h3>
              <p>online courses</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-user-graduate"></i>
            <div>
              <h3>+40k</h3>
              <p>brilliant students</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-chalkboard-user"></i>
            <div>
              <h3>+2k</h3>
              <p>expert tutors</p>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-briefcase"></i>
            <div>
              <h3>100%</h3>
              <p>job placement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h1>Student's reviews</h1>

        <div className="box-container">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic1} alt="" />/{' '}
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic2} alt="" />/{' '}
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic2} alt="" />/{' '}
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic3} alt="" />/{' '}
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic4} alt="" />/
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, suscipit a. Quibusdam, dignissimos consectetur.
              Sed ullam iusto eveniet qui aut quibusdam vero voluptate libero
              facilis fuga. Eligendi eaque molestiae modi?
            </p>
            <div className="student">
              <img src={Pic5} alt="" />/
              <div>
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
