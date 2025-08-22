import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <div className="container bg-white shadow-lg  ">
      {/* --- Navbar --- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3 ">
        <div className="container-fluid">
          <a className="navbar-brand fs-1 fw-bold" href="#">
            MooWEB.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- Placeholder Content --- */}
      <main className="py-5 bg-white ">
        <h2 className="text-center mb-4 ">Work in Progress 🚧</h2>
        <p className="lead text-center ">
          ეს არის დროებითი placeholder ტექსტი. აქ შეგიძლია დაამატო შენი
          სექციები, სურათები ან სხვა კომპონენტები.
        </p>
        <div className="text-center mt-4 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            posuere, justo non aliquam lacinia, nunc ex dapibus libero, sed
            gravida orci ligula nec felis.
          </p>
          <p>
            Vivamus nec sapien eu elit tristique tincidunt. Donec venenatis
            pharetra ligula, vitae pretium magna porta non.
          </p>
        </div>
      </main>

      {/* --- Footer (Optional) --- */}
      <footer className="bg-dark text-white text-center py-3 rounded mb-3 ">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} MyReactSite. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
