import React from "react";

function Header({}) {

  function hamburger() {

    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }

  return (
    <>

      <h1 className="display-4">Thomas Samuel Kading</h1>

      <div className="myHeader">
        

        <hr className="my-4" />
        <div >
        <a className="btn-lg linkBtn" href="/" role="button">
          About Me
        </a>
        <a className="btn-lg linkBtn" href="/Work" role="button">
          Work
        </a>
        <a className="btn-lg linkBtn" href="/Contactme" role="button">
          Contact Me
        </a>
        <a className="btn-lg linkBtn" href="/Resume" role="button">
          Resume
        </a>
        </div>
      </div>

      <a  id="hamburger" className="icon" onClick={hamburger} >


        <i className=" hamburger fa fa-bars fa-6x"></i>
      </a>

      <div className="topnav">
        <div id="myLinks">
          <a href="/">About Me</a>
          <a href="/Work">Work</a>
          <a href="/Contactme">Contact Me</a>
          <a href="/Resume">About</a>
        </div>
        
      </div>
      <div className="hero">
        <p className="mr-3">
         Never do twice what you can automate once.
        </p>
      </div>
      
    </>
  );
}

export default Header;
