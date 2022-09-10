import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import twitter from "../../../images/2.png"
import linkedin from "../../../images/5.png"
import call from "../../../images/call.png"
import facebook from "../../../images/facebook.png"
import location from "../../../images/location.png"
import p from "../../../images/4.png"
import insta from "../../../images/insta.png"
import mail from "../../../images/mail.png"



const Contact = () => {
  return (
    // <div className="contactContainer">
    //   <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
    //     <Button>Contact: mymailforabhi@gmail.com</Button>
    //   </a>
    // </div>
    <>
      <section>
		<div class="container">
			<div class="contactInfo">
				<div>
					<h1 class="head">Contact Info</h1>
					<ul class="info">
						<li>
							<span><img src= {location}/></span>
							<span>
								606 Shweta Residency, Ramdev Park
								Mira Road (E), Thane (401107)
							</span>
						</li>
						<li>
							<span><img src={mail}/></span>
							<span>
								romymathew732@gmail.com
							</span>
						</li>
						<li>
							<span><img src={call}/></span>
							<span>
								+91-9820953137
							</span>
						</li>
					</ul>
				</div>
				<ul class="sci">
					<li><a href="#"><img src= {facebook}/></a></li>
					<li><a href="#"><img src={twitter}/></a></li>
					<li><a href="#"><img src={insta}/></a></li>
					<li><a href="#"><img src= {p}/></a></li>
					<li><a href="#"><img src={linkedin}/></a></li>
				</ul>
			</div>
			<form action="http://localhost/Project/contact_sql.php" method="post">
			<div class="contactForm">
				<h2 class="head2">Send a Message</h2>
				<div class="formBox">
					<div class="inputBox w50">
						<input type="text" name="fname" required/>
						<span>First Name</span>
					</div>
					<div class="inputBox w50">
						<input type="text" name="lname" required/>
						<span>Last Name</span>
					</div>
					<div class="inputBox w50">
						<input type="email" name="email" required/>
						<span>Email</span>
					</div>
					<div class="inputBox w50">
						<input type="number" name="mobile_number" required/>
						<span>Mobile Number</span>
					</div>
					<div class="inputBox w100">
						<textarea name="message" required></textarea>
						<span>Write your message here...</span>
					</div>
					<div class="inputBox w100">
						<input type="submit" value="Send"/>
					</div>
				</div>	
			</div>
		</form>
		</div>
	</section>
    </>
  );
};

export default Contact;
