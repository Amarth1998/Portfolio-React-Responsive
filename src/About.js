import "./CSS/about.css";
import { Outlet, Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div id="container">
        <div id="container1"> </div>
        <div id="container2">
          <div id="container2_1">
            <h1 >About Me</h1>
            <p> Hey, myself Amarth patel <br />
              I belong to Vidisha  , which is not much popular but is a beautiful city. <br />
              I have completed my B.E.  in Chemical from MITS Gwalior in 2020. <br />
              I have done my Full Stack Development Course in 2023 <br />
              I have total 1 year of experience in technical support. <br />
              Now i am looking for a position where I have the opportunity to use my programming skills that I have developed within me . <br />
              I am fast learner , disciplined , very focused person , <br />
              I find it difficult to ask other people for help  - but I am taking a steps to improve

            </p>
            <div id="list_link" >
              <ul>
                <li> <Link to="Skills" className="linkk" >Skills</Link></li>
                <li ><Link to="Exprience" className="linkk" style={{ marginLeft: "12px" }}>Exprience</Link></li>
                <li><Link to="Education" className="linkk" style={{ marginLeft: "12px" }}>Education</Link></li>
              </ul>



            </div>
          </div>


          <div id="container2_2">

            <Outlet />

          </div>

        </div>
      </div>



    </>
  );
}

export default About;
