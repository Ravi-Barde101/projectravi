import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/contact";


function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          
        </Routes>
      </Router>
    );
  }
  export default AppRoute;