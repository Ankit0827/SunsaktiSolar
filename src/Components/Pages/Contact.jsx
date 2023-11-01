import "../../CSS/contact.css";


const Contact = () => {
  return (
    <>
    <div className="contact-parent-div">
      <div className="contact-first-div">

        <div className="left-div">
          <div className="heading-div">
            <h1>For more information Contact us </h1>
            <hr className="hr"/>
          </div>
         <div className="contact-content-div">
            <p>Looking for more information? We are here to assist. Reach out to us on call or by email. You can also send us your details by filling up
             the form below. </p>
         </div>
        </div>


        <div className="form-div">
          <div className="left-form-div">
            <h2>Convert Light in to Energy</h2>
            <p>Reduce your electricity bill today</p>
            <h3>Our Location</h3>
            <p>100, Vishveswariya Nagar,Triveni</p>
            <p>Nagar, Gopalpura Bypass Road,</p>
            <p>Jaipur 302018 (Rajasthan)</p>
          </div>
          <div className="right-div">

            <div className="form">
              <div className="text-center text-white">
                <h4 className="border-b-2">Contact us</h4>
              </div>
              <label> Name</label>
               <input type="text" placeholder="Enter your name"/>

               <label>Email</label>
               <input type="text" placeholder="Enter your email"/>

               <label>Phone</label>
               <input type="text" placeholder="Phone"/>

               <label>Pin code</label>
               <input type="text" placeholder="Pin"/>

               <label >Message</label>
               <textarea name="" id="" cols="30" rows="4"></textarea>

               <button className="contact-btn">Send</button>
               
            </div>
             
              
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact