
import "./CSS/contact.css"
import { useState } from "react";


const Contact=()=> {

    const [input,setInput]=useState({})
const [textarea_input,textarea_setInput]=useState();

const textarea_handleInput=(e)=>{
    textarea_setInput(e.target.value)
}

const handleInput=(event)=>{
let namee=event.target.name;
let valuee=event.target.value;
setInput(values => ({...values, [namee]: valuee}))
}
const handleSubmit = (event) => {
    alert(
   `Your Name is : ${input.Name} 
    Your Email is : ${input.Email} 
    Your Message is ${textarea_input} `)
    alert("Thank You" )
    ;
  }




 
    return (
    <>
  
        
            <div class="row">

                <div class="contact-left">
                    <h1 class="sub-title" style={{color:"#ff004f"}}>Contact Me</h1>
                    <p><i class="fas fa-paper-plane"></i>  <span style={{color:"white "  }}> amarthpatel.ap@gmail.com </span></p>
                    <p><i class="fas fa-phone-square-alt"></i> <span style={{color:"white"}}> 8827079303 </span></p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/amarth.patel.5?mibextid=ZbWKwL" target={"_blank"}><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/amarth_patel?t=atppfp5el49l1Uc6XKkfHw&s=08"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://instagram.com/a_4_amarth?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/amarth-patel-58712b185"><i class="fab fa-linkedin"></i></a>
                    </div><br />
                    <a href="images/my-cv.pdf" download style={{color:"#ff004f"}}>Download CV</a>
                </div>

                <div class="contact-right">
                      <form action=" ">
                        <input type="text" name="Name"  value={input.Name} onChange={handleInput} placeholder="Your Name" required /> <br />
                        <input type="email" name="Email" value={input.Email} onChange={handleInput} placeholder="Your Email" required /> <br />
                        <textarea  rows="6" value={textarea_input} onChange={textarea_handleInput} placeholder="Your Message"></textarea> <br />
                        <button type="submit" class="btn btn3"  id="btn" onClick={handleSubmit}>submit</button>
                        </form>
                </div>

            </div>
         
       
  
  
  
  
    </>
    );
  }
  
  export default Contact;
  