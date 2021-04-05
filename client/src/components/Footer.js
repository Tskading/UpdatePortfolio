import React from "react";

function Footer() {
  return (
    <div className="footer mt-3">
            <a className="contactMe" target="_blank" rel="noreferrer"
                      href="mailto: tskading@gmail.com?subject = Introduction = Message"
                      ><img className="mr-1 mb-1" alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a
                    >

                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/thomas-kading/"
                      ><img className="mr-1 mb-1" alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a
                    >

                    <a className="contactMe" target="_blank" rel="noreferrer" href="https://github.com/Tskading"><img className="mr-1 mb-1" alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a
                    >

                    <a className="contactMe" target="_blank" rel="noreferrer"
                      href="https://open.spotify.com/user/7rqb6tknhd780o8gs7ap5g7wq?si=Z0UfA4JPRwmUNjYjg6JJtA"
                      ><img className="mr-1 mb-1" alt="Spotify" src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" /></a
                    >
            
    </div>
  );
}

export default Footer;