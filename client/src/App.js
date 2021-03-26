import React from "react";
import Header from "./components/Header"
import About from "./pages/About";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {

 

  // const displayPage = () => {
  //   console.log(pathName);
  //   if (pathName.includes("about")) {
       
  //       return <About />;
  //   }
  //   else if (pathName.includes("work")){
  //     return <Work />;
  //   }
  //   else if (pathName.includes("contactme")){
  //     return <ContactMe />;
  //   }
  //   else if (pathName.includes("resume")) {
  //     return <Resume />;

  //   }
  //   else if (pathName.includes("test")) {
  //     return <Test />;
  //   }
  //   else {
  //     return <About />; 
  //   }
             
  //   }
  

  return (
    <div className="App">
      
      <Header />
         <Router>
           <Route exact path="/" component={About} />
           <Route exact path="/ContactMe" component={ContactMe} />
           <Route exact path="/Resume" component={Resume} />
           <Route exact path="/Work" component={Work} />
         </Router>
      
      <Footer />
    </div>
  );
}

export default App;
