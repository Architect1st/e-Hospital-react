import React from "react";
import "../css/LandingPage.css";

export default function ProductCard(props) {
    return(
        <div class="product-card">
            <div class="image-container">
                <img src={props.img} alt="Product 1"/>
            </div>
            <div class="product-card-content">
                <h3 class="product-card-title">{props.name}</h3>
                <p class="product-card-description">
                    {props.description}
                </p>
                <a class="product-card-button" href="index">Learn More</a>
            </div>
        </div>
  );
}