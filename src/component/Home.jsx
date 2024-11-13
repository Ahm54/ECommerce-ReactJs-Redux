import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white">
        <img
          src="/assets/fot2.jpg"
          class="card-img-top"
          alt="Background"
          height="650px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
            <p class="card-text lead fs-2">
                Check Out All the Trends
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
