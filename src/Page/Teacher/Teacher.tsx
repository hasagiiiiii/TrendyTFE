import React from 'react';
import './index.css';
import Pic1 from '../../assets/pic-1.jpg';
import Pic2 from '../../assets/pic-2.jpg';
import Pic3 from '../../assets/pic-3.jpg';
import Pic4 from '../../assets/pic-4.jpg';
import Pic5 from '../../assets/pic-5.jpg';
import Pic6 from '../../assets/about-img.svg';
import Pic7 from '../../assets/pic-7.jpg';
const Teacher = () => {
  return (
    <section className="teachers">
      <h1 style={{ fontSize: '30px' }}>Expert Teachers</h1>

      <form action="" method="post" className="search-tutor">
        <input
          type="text"
          name="search_box"
          placeholder="search tutors..."
          required
          maxLength={100}
        />
        <button
          type="submit"
          className="fas fa-search"
          name="search_tutor"
        ></button>
      </form>

      <div className="box-container">
        <div className="box offer">
          <h3>become a tutor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque ipsam fuga ex et aliquam.
          </p>
          <a href="register.html" className="inline-btn">
            get started
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic5} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic1} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic2} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic3} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic4} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic2} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>

        <div className="box">
          <div className="tutor">
            <img src={Pic7} alt="" />
            <div>
              <h3>john deo</h3>
              <span>developer</span>
            </div>
          </div>
          <p>
            total playlists : <span>4</span>
          </p>
          <p>
            total videos : <span>18</span>
          </p>
          <p>
            total likes : <span>1208</span>
          </p>
          <a href="teacher_profile.html" className="inline-btn">
            view profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
