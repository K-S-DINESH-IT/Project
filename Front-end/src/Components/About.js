import React from 'react'
import './About.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <div>
            <div>
                <hi>About</hi>
            </div>
        </div>
        <footer class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col">
                            
                            <h4 id='des2'>company</h4>
							<ul>
							<li><a href="#">About</a></li>
							<li><a href="#">Home</a></li>	
							</ul>
						</div>
						<div class="footer-col">
							<h4 id='des3'>get help</h4>
							<ul>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">shipping</a></li>
								<li><a href="#">returns</a></li>
								<li><a href="#">order status</a></li>
								<li><a href="#">payment options</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4 id='des4'>online shop</h4>
							<ul>
								<li><a href="#">watch</a></li>
								<li><a href="#">bag</a></li>
								<li><a href="#">shoes</a></li>
								<li><a href="#">dress</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4 id='des5'>follow us</h4>
							<div className="social-links">
								<a href="#"><FaFacebookSquare /></a>
								<a href="#"><FaTwitterSquare /></a>
								<a href="#"><FaInstagram /></a>
								<a href="#"><FaLinkedin /></a>
							</div>
						</div>
					</div>
				</div>
			</footer>
    </div>
  )
}
