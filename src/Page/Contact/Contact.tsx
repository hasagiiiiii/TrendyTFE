import React from 'react';
import './index.css';
import ContactI from '../../assets/contact-img.svg';
const Contact = () => {
  return (
    <section className="contact">
      <div className="row">
        <div className="image">
          <img src={ContactI} alt="" />
        </div>

        <form action="" method="post">
          <h3>get in touch</h3>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            required
            maxLength={1000}
            className="box"
          />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            required
            maxLength={1000}
            className="box"
          />
          <input
            type="number"
            placeholder="enter your number"
            name="number"
            required
            maxLength={1000}
            className="box"
          />
          {/* <textarea name="msg" className="box" placeholder="enter your message" required maxLength={1000} cols="30" rows="10"></textarea> */}
          <input
            type="submit"
            value="send message"
            className="inline-btn"
            name="submit"
          />
        </form>
      </div>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-phone"></i>
          <h3>phone number</h3>
          <a href="tel:1234567890">0566036299</a>
          <a href="tel:1234567890">0566036299</a>
        </div>

        <div className="box">
          <i className="fas fa-envelope"></i>
          <h3>email address</h3>
          <a href="mailto:shaikhanas@gmail.com">dvant24102003@gmail.come</a>
          <a href="mailto:anasbhai@gmail.com">TrungDV25@fpt.com</a>
        </div>

        <div className="box">
          <i className="fas fa-map-marker-alt"></i>
          <h3>office address</h3>
          <a href="#">28A Lê Trọng Tấn, Hà Đông, Hà Nội</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
