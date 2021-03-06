import React from "react";

function ContactMe () {
    return (
        <>
            <h1 className="ml-3">
                How to Contact Me
            </h1>
            <div className="col-sm-10 contactMe">

            <ul id="linkedIn">
                    
                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-kading/"
                      >LinkedIn</a
                    >
                  </ul>
               
                
                  <ul id="email">
                    <a className="contactMe" target="_blank" rel="noreferrer"
                      href="mailto: tskading@gmail.com?subject = Introduction = Message"
                      >tskading@gmail.com</a
                    >
                  </ul>

                  <ul id="github">
                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://github.com/Tskading">GitHub</a
                    >
                  </ul>

                  <ul id="spotify text-muted">
                    <a className="contactMe" target="_blank" rel="noreferrer"
                      href="https://open.spotify.com/user/7rqb6tknhd780o8gs7ap5g7wq?si=Z0UfA4JPRwmUNjYjg6JJtA"
                      >Spotify</a
                    >
                  </ul>


              </div>
            
     
     
        </>
    )
}
export default ContactMe;