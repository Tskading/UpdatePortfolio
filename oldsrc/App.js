import React from "react";
import Header from "./components/Header"
import About from "./pages/About";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

import Test from "./pages/test";

function App() {


  const pathName = window.location.pathname;

  const displayPage = () => {
    console.log(pathName);
    if (pathName.includes("about")) {
       
        return <About />;
    }
    else if (pathName.includes("work")){
      return <Work />;
    }
    else if (pathName.includes("contactme")){
      return <ContactMe />;
    }
    else if (pathName.includes("resume")) {
      return <Resume />;

    }
    else if (pathName.includes("test")) {
      return <Test />;
    }
    else {
      return <About />; 
    }
             
    }
  

  return (
    <div className="App">
      {console.log(pathName)}
      <Header />
      {displayPage()}
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
