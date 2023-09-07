import React from "react";
import "../css/LandingPage.css";

export default function LandingHero() {
    return(
    <section class="main-section">
    <div class="main-section-content">
      <h2 class="main-section-title">Smart Digital Medicine</h2>
      <div class="scrolltext-content">
        <div class="scrolltext-content__container-wrapper">
          <div class="scrolltext-content__container">
            <ul class="scrolltext-content__container__list">
              <li class="scrolltext-content__container__list__item">Revolutionizing Healthcare for a
                Connected Future
              </li>
              <li class="scrolltext-content__container__list__item">Explore Our Smart Digital
                Medicine Solutions
              </li>
              <li class="scrolltext-content__container__list__item">Discover the Power of Smart
                Digital Medicine
              </li>
              <li class="scrolltext-content__container__list__item">Embracing the Possibilities of
                Smart Digital Healthcare
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href="#product" class="cta-button">Get Started</a>
    </div>
    <section class="scroll-section">

      <div class="scroll-container ">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="scroll-text">Scroll down</span>
      </div>
    </section>
  </section>
  );
}