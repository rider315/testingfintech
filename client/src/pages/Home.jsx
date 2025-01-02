
// import Lottie from 'lottie-react';
import Animation from "../Animation.json";
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Analytics } from "../../components/Analytics";

export const Home = () => {
  //   useEffect(()=>{
  //     document.title="Rider Infinity"
  //   },[]);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <main>
      {/* <div class="taskbar">
  <button class="menu-toggle">Menu</button>
  <nav class="mobile-menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div> */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Lets Create Something Different</p>
              <h1>Welcome to Rider Infinity</h1>
              <p>
                I'm a software developer and entrepreneur, running Rider Infinity. With years of experience in coding and design, I specialize in creating user-friendly software solutions that simplify complex tasks. Let's build something great together.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <lord-icon
              src="https://cdn.lordicon.com/iibtcwna.json"
              trigger="loop"

              style={{ width: '500px', height: '500px' }}
            ></lord-icon>

            {/* hero images  */}
            {/* <div className="hero-image">
              <Lottie animationData={Animation} style={{ width: '400px', height: '400px' }} />                
              </div> */}

          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />
      {/* <section id="portfolio">
        <h2 class="center" data-aos="zoom-in-right">Portfolio -My past work samples</h2>
        <div class="content portfolio--content" data-aos="zoom-out-left">
          <div class="item1" id="particular_portfolio">
            <h3 class="lastone">Lastone</h3>


            <img src="/images/image.png" alt="logo design" />
            <div class="layer">
              <h3 class="lastone">LASTONE</h3>
            </div>
          </div>

        </div>
      </section> */}

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/innovation.png"
              alt="coding together"
              width="400"
              height="500"
            />
            {/* <Analytics/> */}

          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Coupling my readiness for work with a proven track record of delivering outstanding results, I am the skilled professional you can rely on to get the job done efficiently, effectively, and to the highest possible standards.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

