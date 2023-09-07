import React from 'react';
import LandingHero from '../components/LandingHero';
import "../css/LandingPage.css";
import LandingPageBackgroundVideo from "../videos/landing-page-background-video.mp4"
import ProductCard from '../components/ProductCard';

import DigitalHealth from "../images/DigitalHealth.png";
import HealthcareProviderDigitalTwin from "../images/HealthcareProviderDigitalTwin.png";
import MedicalDigitalAssistance from "../images/MedicalDigitalAssistance.png";
import RoboticSurgery from "../images/RoboticSurgery.png";

function LandingPage() {
  return (
    <div className="video-overlay">
        <video autoPlay loop muted playsinline id="myVideo">
            <source src={LandingPageBackgroundVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div class="container">
            <LandingHero />
            <section class="product-section" id="product">
                <h2 class="product-section-title"> Featured Solutions</h2>
                <ProductCard 
                    img = {DigitalHealth}
                    name = "e-Hospital"
                    description = "Our e-Hospital platform offers convenient online consultations, medical records access, and appointment scheduling."
                />
                <ProductCard 
                    img = {HealthcareProviderDigitalTwin}
                    name = "Healthcare Provider Digital Twin"
                    description = "With our Healthcare Provider Digital Twin, you can monitor and manage your health from the comfort of your home."
                />
                <ProductCard 
                    img = {MedicalDigitalAssistance}
                    name = "Medical Digital Assistance"
                    description = "Our Medical Digital Assistance provides real-time medical guidance and support through AI-powered chatbots."
                />
                <ProductCard 
                    img = {RoboticSurgery}
                    name = "Robotic Surgery"
                    description = "Experience the precision and effectiveness of robotic surgery for complex medical procedures."
                />
                
            </section>

            <section class="our-mission" id="our-mission">
                <h3>Our Mission</h3>
                <p class="custom-quotes">“ Engineering Smarter Medicine”</p>
            </section>

            <section class="aboutUs" id="aboutUs">
                <h3>About Us</h3>
                <p>Smart Digital Medicine (SDM) is a specialized Canadian company that is being established to provide specialized healthcare services, big data analytics, and public sector digital transformation. We at SDM develop innovative solutions for different sectors of medicine such as ehealth, mhealth, telemedicine, medical robots and automation (such as robotic surgery), and artificial intelligence-assisted diagnosis. We perfect our big data analytics and innovative medical diagnostic solutions by working with organizations across various healthcare institutes, including hospitals, clinics, labs, research centres, medical doctors, and universities. Our work with multiple types of end users has helped us understand that while many of these institutes could benefit from AI, big data analytics, and breakthrough technologies, only few have the capacity to implement innovative solutions. We will help users to utilize our innovative, comprehensive, highly accurate and smarter clinical reasoning processes and take advantage of data insights until they reach superior patient outcomes which includes but is not limited to the clinical interview, differential medical diagnosis, and treatment plans.</p>
            </section>

            <section class="contact" id="contact">
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns, please feel free to contact us:</p>
                <ul>
                    <li>Phone: +1613-804-8000</li>
                    <li>Email: info@ehospital.com</li>
                    <li>Address: 12 Monet Crt. Ottawa, Ontario, K1T 4B6</li>
                </ul>
            </section>
        </div>
    </div>
  );
}

export default LandingPage;
