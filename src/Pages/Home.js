import React from "react";
import NavBar from "../Components/NavBar";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="Home">
      <header className="header">
        <NavBar />
      </header>
      <main>
        <div class="about_section" id="about">
          <div class="about_content">
            <h2 id="about-p">About us</h2>
            <p id="para">Lost & Found Tracking Made Simple</p>
            <p id="para">
                “Misplaced your items? No problem! Moringa Lost & Found lets you
                report and track lost items with ease.”
              </p>
              <p id="para">
                Whether you're seeking a relaxing beach getaway or an
                exhilarating mountain trek, we’re here to guide you every step
                of the way.
              </p>
          
          </div>
          <img id="imagebanner" className="form-video"
            src="https://cdn.pixabay.com/photo/2014/08/15/06/16/imprint-418594_640.jpg"
            
        /  >
        </div>

        <div class="about_section" id="about">
          <img id="imagebanner" className="form-video"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResw2f0qvYZN9f-3BvUAOuKSwVHf0yzuJ8ww&s"
          />
          <div class="about_content">
          <h2 id="about-p">What We Do?</h2>
            <ol>
            <p id="para">Lost & Found Tracking Made Simple</p>
            <p id="para">
                At Moringa Lost and Found, we make it easier to reconnect with
                whats been lost.
              </p>
              <p id="para">
                Whether you have misplaced something important or found an item
                that needs to be returned, our community-driven platform helps
                you track it down.
              </p>
              <p id="para">
                We provide a simple, secure space to post lost and found items,
                search for belongings, assist others in returning what they have
                found, and offer rewards for those who help reunite lost items
                with their rightful owners.
              </p>
              <p id="para">
                Our mission is to make the process of reuniting lost items
                quick, stress-free, and rewarding, helping bring peace of mind
                to everyone involved.
              </p>
            </ol>
          </div>
        </div>
        <div className="about_section" id="about">
            <div className="user_content">
              <h2 id="about-p">User Guide Overview</h2>
              <div className="image-container">
                <img
                  className="image2"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-1280x500-1.jpg"
                  alt="image"
                />
                <img
                  className="image3"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-process-finder-1280x500-1.jpg"
                  alt="image"
                />
                <img
                  className="image4"
                  src="https://www.lostfoundrewards.com/wp-content/uploads/2020/01/banner-lost-and-found-rewards-about-us-1280x500-1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>


          <div class="about_section" id="about">
            <div class="about_content">
              <h2 id="about-p">Why us?</h2>
              <p id="para">Lost & Found Tracking Made Simple</p>
              <p id="para">
                We simplify the process of recovering lost items by creating a
                secure, efficient, and transparent system for reporting,
                tracking, and returning belongings
              </p>

              <p id="para">
                With real-time updates, a user-friendly interface, and the
                ability to offer and receive rewards, we make sure lost items
                are reunited with their owners quickly and fairly.
              </p>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo"
              className="form-video"
              id="imagebanner"
            />
          </div>
      </main>

      <footer>
        <div class="footerdetails">
          <a href="#" id="textlogo">
            Moringa Lost And Found
          </a>
          <p className="footer-p">
            {" "}
            &copy; MoringaLostAndFound, 2024 All Rights Reserved
          </p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              </a>
            </li>
          </ul>
          <div class="imagelogo">
            <img
              src="https://images.vexels.com/content/198875/preview/lost-and-founds-label-flat-50fdf0.png"
              id="imagelogo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
