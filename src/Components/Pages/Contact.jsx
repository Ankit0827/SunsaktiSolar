// import { useState, useEffect } from "react";
import "../../CSS/contact.css";

// import {
//   MessageOutlined,
//   FieldTimeOutlined,
//   MailOutlined,
//   FacebookOutlined,
//   TwitterOutlined,
//   InstagramOutlined,
//   LinkedinOutlined,
// } from "@ant-design/icons";


const Contact = () => {
  return (
    <div className="contact-parent-div">
      <div className="contact-first-div">

        <div className="left-div">
          <div className="heading-div">
            <h2>Contact us</h2>
            <hr className="hr"/>
          </div>
         <div className="contact-content-div">
            <p>Looking for more information? We are here to assist. Reach out to us          on call or by email. You can also send us your details by filling up
             the form below. </p>
         </div>
        </div>


        <div className="form-div">
          <div className="left-form-div">
            <h3>Convert Light in to Energy</h3>
            <p>Reduce your electricity bill today</p>
          </div>
          <div className="right-div">
            <div className="heading-div">
             <h4>Contact  us</h4>
            </div>

            <div className="form">

              <label>First Name</label>
               <input type="text" placeholder="Enter your name"/>

               <label>Last  Name</label>
               <input type="text" placeholder="Enter your last name"/>

               <label>Email</label>
               <input type="text" placeholder="Enter your email"/>

               <label>Phone</label>
               <input type="text" placeholder="Phone"/>

               <label>Pin code</label>
               <input type="text" placeholder="Pin"/>

               <label >Message</label>
               <textarea name="" id="" cols="30" rows="5"></textarea>

               <button className="contact-btn">Send</button>
               
            </div>
             
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact