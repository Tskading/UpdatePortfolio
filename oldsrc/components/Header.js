import React from "react";

function Header({}) {
  return (
    <>
      <div className="myHeader">
        <h1 className="display-4">Thomas Samuel Kading</h1>

        <hr className="my-4" />
        
        <a className="btn-lg linkBtn" href="/updateportfolio/about" role="button">
          About Me
        </a>
        <a className="btn-lg linkBtn" href="/updateportfolio/work" role="button">
          Work
        </a>
        <a className="btn-lg linkBtn" href="/updateportfolio/contactme" role="button">
          Contact Me
        </a>
        <a className="btn-lg linkBtn" href="/updateportfolio/resume" role="button">
          Resume
        </a>
      </div>

      <div className="hero">
        <p>
         Never do twice what you can automate once.
        </p>
      </div>
    </>
  );
}

export default Header;
