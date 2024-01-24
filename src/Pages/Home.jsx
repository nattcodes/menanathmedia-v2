import React, { useState } from "react";
import logo from "../Assets/Branding.png"
import home from "../Assets/Untitled design (1).png"

const Home = () => {
  const [menuBar, setMenuBar] = useState(false)

  const toggleMenu = () => {
    setMenuBar = true
    alert('clicked')
  }
  return (
    <main>
       <div class="cursor"></div>
        <nav>
        <div className="nav-content">
          <div className="brand-name">
            <img src={logo} alt="" />
          </div>
          <div class="hamburger-lines">
            <button>
                  <span class="line line1"></span>
                  <span class="line line2"></span>
            </button>
          </div>  
          <ul className="nav-links">
            <h4 className="nav-items-h4">01</h4>
            <li className="nav-items"><a href="">Home</a></li>
            <h4 className="nav-items-h4">02</h4>
            <li className="nav-items"><a href="">About</a></li>
            <h4 className="nav-items-h4">03</h4>
            <li className="nav-items"><a href="">Services</a></li>
            <h4 className="nav-items-h4">04</h4>
            <li className="nav-items"><a href="">Talents</a></li>
            <h4 className="nav-items-h4">05</h4>
            <li className="nav-items"><a href="">Contact</a></li>
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
      <div className="about" style={{backgroundColor : 'red'}}>
        <div className="about-content">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit tempore sit iste distinctio, iure vero natus aspernatur quis incidunt. Saepe magni perferendis voluptatum eius? Porro cupiditate vel quibusdam, rerum assumenda temporibus impedit quis! Ducimus consequuntur perspiciatis quidem non hic nulla magnam ad quo, rem, distinctio minima harum eum beatae laudantium suscipit optio ullam. Quos vel, molestias numquam, voluptas ut voluptatem obcaecati, ipsam illum harum nisi sapiente deleniti laudantium iste amet fugit. Debitis veritatis voluptatum quaerat commodi labore architecto. Eum sed, earum neque ex voluptatum quos vitae quam pariatur dolor velit maiores expedita fuga. Commodi necessitatibus voluptatibus sed quas accusantium fugit. Repellat ratione voluptatum voluptatibus consequuntur ex molestiae et deserunt assumenda laudantium unde, similique modi ipsum cum corrupti ea pariatur! Ea cumque nisi laboriosam, sint ipsa modi ratione molestiae officiis placeat ad amet asperiores facilis tempore magni adipisci, omnis soluta odit incidunt autem voluptatum ducimus iure quaerat qui. Quam animi labore ab iure quibusdam exercitationem iusto. Soluta nihil sint id reprehenderit sequi quod magnam esse natus numquam omnis, magni quis? Maxime voluptate pariatur nesciunt optio dolores quod amet ipsam, exercitationem, cupiditate velit qui alias soluta delectus hic praesentium ducimus enim fugiat provident? Reiciendis cupiditate qui quasi pariatur officia harum doloremque at explicabo quaerat quam odit expedita ad laboriosam enim, perferendis amet? Ipsum, ullam! Tempora perferendis numquam earum voluptatem sapiente, ea nostrum molestiae labore, quam illum deserunt cupiditate commodi, alias quaerat veritatis. Sint nobis distinctio aliquid voluptas non libero atque pariatur eos asperiores, tenetur sit ipsum aliquam optio in vel reiciendis officiis nemo adipisci ut beatae esse qui eum. Repellat, impedit. Iure, nulla! Ipsam animi et, ut cum totam vitae ipsa hic illum eos dolorem dolores impedit doloremque ratione aperiam ab culpa iste voluptatum cupiditate quae, aspernatur pariatur, explicabo autem! Natus non totam, expedita illum inventore voluptates quas quo, maxime itaque eaque illo! Similique illo laudantium ipsam dignissimos asperiores exercitationem eum incidunt placeat eveniet cumque quibusdam fuga culpa sunt maxime qui voluptatem, fugiat nam cupiditate maiores officiis nemo ad. Mollitia voluptatem deleniti accusamus tempora sapiente dolor a dolores itaque dolorem, animi, quia fugiat amet officiis expedita blanditiis? Vero placeat ullam nam quidem a ducimus? Ipsa consequuntur minima magni placeat assumenda aperiam excepturi unde, sit pariatur, provident aspernatur alias natus ea iure eius in. Nam voluptatum non laboriosam quisquam eius incidunt dolore accusantium harum ipsam, quia repellendus quod, sint provident, atque vel nostrum cumque unde vitae esse aspernatur facilis magnam sunt fugiat. Iure, cupiditate dolores. Possimus accusamus iste nisi. Nulla quis reiciendis perferendis enim ab! Cumque beatae, dicta nesciunt ipsam ipsum quae veritatis in, officia minus facere et reprehenderit iure culpa numquam expedita. Magnam, dolores placeat id rerum, nulla animi voluptatem, dolor quidem esse vel impedit blanditiis nobis? Nostrum quam voluptatibus, voluptatem porro fugit at nobis corrupti ea aspernatur repudiandae facilis tempora doloribus saepe explicabo, dolorum iusto incidunt earum. Facere libero dolor commodi, illum asperiores aliquid? Voluptatibus sapiente incidunt aut omnis nemo similique rem nihil harum numquam maxime quia sunt ipsa, dicta, modi quasi voluptate vero ad officia ullam totam laboriosam recusandae.
        </div>
        
      </div>
    </main>
    
  );
};

export default Home;
