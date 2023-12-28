import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Projects from "./pages/Projects"
import ComingSoon from "./pages/ComingSoon";
 
function App() {
    return (

        <ComingSoon/>
        
        // <Router>
        //     <Navbar />
        //     <Routes>
        //         <Route exact path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/projects" element={<Projects />} />
        //     </Routes>
        // </Router>
    );
}
 
export default App;