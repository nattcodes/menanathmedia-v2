import React, { useState } from "react";
import logo from "../Assets/Branding.png"
import home from "../Assets/Untitled design (1).png"
import about from "../Assets/Untitled design (10).png"
import talent from "../Assets/pexels-rfstudio-3817495.jpg"
import influencer from "../Assets/pexels-ron-lach-7801880.jpg"
import media from "../Assets/pexels-flo-dahm-699459.jpg"
import content from "../Assets/pexels-leeloo-the-first-8970680.jpg"
import event from "../Assets/pexels-pixabay-356065.jpg"

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
                <a href="#" className="icon-d"><i className="fab fa-linkedin-in"></i></a>
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
                <p><span className="p-purple">Mena Nath Media</span>, right in the pulse of Lagos, isn't just another media and entertainment agency, we're your all-in-one hub for media, public relations, influencer marketing, Talent and brand management.</p>
                <p>Born from a passion to redefine agency services in corporate and entertainment circles, we're here to <span className="p-purple">craft success stories</span> for individuals, corporate entities, and private outfits.</p>
                <button className="about-btn"><a href=""><span className="btn-about">More about us</span></a></button>
                <div className="a-socials">
                  <div className="a-social-icons">
                    <a href="#" className="icon-a"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="icon-b"><i className=" fab fa-x-twitter"></i></a>
                    <a href="#" className="icon-c"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="icon-d"><i className="fab fa-linkedin-in"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <section class="who">
        <div className="who-content">
              <div class="who-container">
                  <div class="who-box">
                      <h4 class="who4" id="one">OUR EDGE</h4>
                      <h2 class="who2">We're Strategic</h2>
                      <h3 class="who3">Our innovative and problem solving strategies based on target audience, insights and analysis are always focused on achieving measurable business result for our clients.</h3>
                  </div>
                  <div class="who-box">
                      <h4 class="who4" id="two">OUR CORE</h4>
                      <h2 class="who2">We're Professional</h2>
                      <h3 class="who3">With our local knowledge and global insights, we have genuine understanding of your target market and how to connect with them on an emotional level that builds a deep and meaningful brand relation.</h3>
                  </div>
                  <div class="who-box">
                      <h4 class="who4" id="three">OUR PLUS</h4>
                      <h2 class="who2">We're Connected</h2>
                      <h3 class="who3">We love to network and our unlimited contacts of celebrites,tastemakers and professionals within the industry keep us in the know at all times and allow our clients special access to insider opportunities.</h3>
                  </div>
            </div>
        </div>
      </section>
      <section className="services">
        <div className="services-content">
          <h1>Services</h1>
          <div className="services-item">
            <div class="slide-img">
                <img src={talent}/>
                <div class="service-overlay">
                    <h3>Talents</h3>
                </div>
            </div>
            <div class="slide-img">
                <img src={influencer}/>
                <div class="service-overlay">
                    <h3>Influencer Marketing</h3>
                </div>
            </div>
            <div class="slide-img">
                <img src={media}/>
                <div class="service-overlay">
                    <h3>Media Relations</h3>
                </div>
            </div>
            <div class="slide-img">
                <img src={content}/>
                <div class="service-overlay">
                    <h3>Content Strategy</h3>
                </div>
            </div>
            <div class="slide-img">
                <img src={event}/>
                <div class="service-overlay">
                    <h3>Event Management</h3>
                </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
    
  );
};

export default Home;
