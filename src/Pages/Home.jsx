import React, { useState } from "react";
import logo from "../Assets/Branding.png"
import home from "../Assets/Untitled design (1).png"
import about from "../Assets/Untitled design (5).png"

const Home = () => {
  const [showMenuBar, setShowMenuBar] = useState(false)

  const toggleMenu = () => {
  setShowMenuBar(!showMenuBar)
    console.log('first')
  }
  return (
    <main>
       <div class="cursor"></div>
        <nav>
        <div className={`nav-content ${showMenuBar ? 'nav-links-visible' : ''}`}>
          <div className="brand-name">
            <img src={logo} alt="" />
          </div>
          <div class="hamburger-lines">
            <button onClick={toggleMenu}>
                  <span class="line line1"   style={{ background: showMenuBar ? '#f6f6f6f2' : '#0f0f0ff2' }}></span>
                  <span class="line line2"   style={{ background: showMenuBar ? '#f6f6f6f2' : '#0f0f0ff2' }}></span>
            </button>
          </div>
          <ul className="nav-links" style={{ display: showMenuBar ? 'inline-block' : 'none' }}>
            <h4 className="nav-items-h4">01</h4>
            <li className="nav-items"><a href="">Home</a></li>
            <h4 className="nav-items-h4">02</h4>
            <li className="nav-items"><a href="">Services</a></li>
            <h4 className="nav-items-h4">03</h4>
            <li className="nav-items"><a href="">Talents</a></li>
            <h4 className="nav-items-h4">04</h4>
            <li className="nav-items"><a href="">Contact</a></li>
            <div className="socials">
              <h5>Socials</h5>
              <div className="social-icons">
                <a href="#" className="icon-a"><i className="fab fa-facebook"></i></a>
                <a href="#" className="icon-b"><i className=" fab fa-x-twitter"></i></a>
                <a href="#" className="icon-c"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      <div className="home">
        <div className="home-content">
          
          <div className="hometext">
            <h1>Building Brands</h1>
            <h2> Crafting Success Stories</h2>
            <p className="text-p">Dedicated to global progress, we leverage expertise in beauty, fashion, and lifestyle PR to craft impactful, resonant ideas, driving innovation in the industries we touch.</p>
            <button className="home-btn"><a href=""><span className="btn-home">Get Started</span></a></button>
            <p className="text-extra">Branding <span>.</span> Marketing <span>.</span> Content Strategy</p>
          </div>
          <div className="home-img">
          <img src={home} alt="" />
          </div>
          
          
        </div>
      </div>
      <section className="about">
        <div className="about-content">
          <div className="ab">
            <div className="about-box left"><img src={about} /></div>
            <div className="about-box right">
              <div className="about-text">
                <h1>About</h1>
                <p>Mena Nath Media, right in the pulse of Lagos, isn't just another media and entertainment agency, we're your all-in-one hub for media, public relations, influencer marketing, Talent and brand management.</p>
                <p>Born from a passion to redefine agency services in corporate and entertainment circles, we're here to craft success stories for individuals, corporate entities, and private outfits.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
    </main>
    
  );
};

export default Home;
