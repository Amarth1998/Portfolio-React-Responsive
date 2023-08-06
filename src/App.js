import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Exprience from "./Exprience";
import Education from "./Education";



const App = () => {
  return (
    <>

      <BrowserRouter basename="/react">
        <Routes >
          <Route  path="/react" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />}>
            <Route index  element={<Skills />} />
              <Route  path="Skills"  index element={<Skills />} />
              <Route path="Exprience" element={<Exprience />} />
              <Route path="Education" element={<Education />} />
            </Route>

            <Route path="Contact" element={<Contact />} />
            <Route path="Projects" element={<Projects />} /> 

          </Route>

        </Routes>

      </BrowserRouter>

     

    </>
  );
}

export default App;
