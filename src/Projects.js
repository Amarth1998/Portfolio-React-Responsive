import "./CSS/project.css"
import i1 from "./pp1.jpeg"
import i2 from "./pp2.jpeg"
import i3 from "./pp3.png"
import { Link } from "react-router-dom";


const Project=()=>{
    return(
        <>
 <div id="portfolio">
        <div class="container_project"><br /> <br />

            
            <div class="work-list">
                
                <div class="work" id="wrok1">
                    <img src={i1} alt="" />
                    <div class="layer">
                        <h2>Advanture Site</h2>
                        <p>Its a Advanture Website using HTML AND CSS </p>
                        <Link to=" "  target={"_blank"}><i class="fas fa-external-link-alt"></i></Link>
                        {/* <a href=""><i class="fas fa-external-link-alt"></i></a> */}
                    </div>
                </div>
                <div class="work" id="wrok2">
                    <img src={i2}  alt="" />
                    <div class="layer">
                        <h2>BMW Site</h2>
                        <p>Its a BMW Replica Website using HTML AND CSS </p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work" id="wrok3">
                    <img src={i3}  alt="" />
                    <div class="layer">
                        <h2>Facebook</h2>
                        <p>Its a Facebook Replica Website using HTML AND CSS </p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
</div>

        </>
    )


}

export default Project;