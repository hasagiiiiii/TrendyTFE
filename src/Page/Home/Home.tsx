import React from 'react';
import './Home.css';
import { FaCode } from 'react-icons/fa';
import { IoIosBusiness } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaChartLine } from 'react-icons/fa6';
import { IoMusicalNotesSharp } from 'react-icons/io5';
import { CiCamera } from 'react-icons/ci';
const Home: React.FC<{}> = () => {
  return (
    <div>
      <section className="home-grid">
        <h1 className="heading">quick options</h1>

        <div className="box-container">
          <div className="box">
            <h3 className="title">likes and comments</h3>
            <p className="likes">
              total likes : <span>25</span>
            </p>
            <Link to="" className="inline-btn">
              view likes
            </Link>
            <p className="likes">
              total comments : <span>12</span>
            </p>
            <Link to="" className="inline-btn">
              view comments
            </Link>
            <p className="likes">
              saved playlists : <span>4</span>
            </p>
            <Link to="" className="inline-btn">
              view playlists
            </Link>
          </div>

          <div className="box">
            <h3 className="title">top categories</h3>
            <div className="flex">
              <Link to="">
                <FaCode size={18} color="gray" />
                <span>development</span>
              </Link>
              <Link to="#">
                <IoIosBusiness size={18} color="gray" />
                <span>business</span>
              </Link>
              <Link to="">
                <FaPencilAlt size={18} />
                <span>design</span>
              </Link>
              <Link to="">
                <FaChartLine size={18} />
                <span>marketing</span>
              </Link>
              <Link to="">
                <IoMusicalNotesSharp size={18} />
                <span>music</span>
              </Link>
              <Link to="">
                <CiCamera size={18} />
                <span>photography</span>
              </Link>
              <Link to="">
                <i className="fas fa-cog"></i>
                <span>software</span>
              </Link>
              <Link to="">
                <i className="fas fa-vial"></i>
                <span>science</span>
              </Link>
            </div>
          </div>

          <div className="box">
            <h3 className="title">popular topics</h3>
            <div className="flex">
              <a href="#">
                <i className="fab fa-html5"></i>
                <span>HTML</span>
              </a>
              <a href="#">
                <i className="fab fa-css3"></i>
                <span>CSS</span>
              </a>
              <a href="#">
                <i className="fab fa-js"></i>
                <span>javascript</span>
              </a>
              <a href="#">
                <i className="fab fa-react"></i>
                <span>react</span>
              </a>
              <a href="#">
                <i className="fab fa-php"></i>
                <span>PHP</span>
              </a>
              <a href="#">
                <i className="fab fa-bootstrap"></i>
                <span>bootstrap</span>
              </a>
            </div>
          </div>

          <div className="box">
            <h3 className="title">become a tutor</h3>
            <p className="tutor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, nam?
            </p>
            <a href="teachers.html" className="inline-btn">
              get started
            </a>
          </div>
        </div>
      </section>

      {/* <section className="courses">
        <h1 className="heading">our courses</h1>

        <div className="box-container">
          <div className="box">
            <div className="tutor">
              <img src="images/pic-2.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-1.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete HTML tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-3.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-2.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete CSS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-4.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-3.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-5.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-4.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete Boostrap tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-6.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-5.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete JQuery tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>

          <div className="box">
            <div className="tutor">
              <img src="images/pic-7.jpg" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>
            <div className="thumb">
              <img src="images/thumb-6.png" alt="" />
              <span>10 videos</span>
            </div>
            <h3 className="title">complete SASS tutorial</h3>
            <a href="playlist.html" className="inline-btn">
              view playlist
            </a>
          </div>
        </div>

        <div className="more-btn">
          <a href="courses.html" className="inline-option-btn">
            view all courses
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
