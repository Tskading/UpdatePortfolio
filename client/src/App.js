import React from "react";
import Header from "./components/Header"
import About from "./pages/About";
import Work from "./pages/Work";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() { 

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
