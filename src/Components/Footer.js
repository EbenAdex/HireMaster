import React from 'react';
import Facebook from '../Assets/Facebook.jpg';
import Twitter from '../Assets/Twitter.jpg';
import Instagram from '../Assets/Insta2.jpg';
import Tiktok from '../Assets/Tiktok.jpg';
import Telegram from '../Assets/Telegram.jpg';
import Youtube from '../Assets/YouTube.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">HireMaster</h2>
          <p> See what Thousands of people are looking for on
            <strong> HireMaster</strong>.
            </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/guides">Guides</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/security">Security</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Work With Us</h3>
            <ul>
              <li><a href="/advertise">Advertisers</a></li>
              <li><a href="/partners">Partnerships</a></li>
            </ul>
          </div>
        </div>

        {/* Follow Us, Social Media, and Location Selector - On the Same Line */}
        <div className="footer-bottom">
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://tiktok.com/@yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Tiktok} alt="TikTok" />
              </a>
              <a href="https://telegram.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt="Telegram" />
              </a>
              <a href="https://youtube.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>
          
          {/* Country/Location Selector */}
          <div className="footer-location">
            <select>
              <option value="ng">Nigeria</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="pa">Pakistan</option>
              <option value="as">Austria</option>
              <option value="sn">Sweden</option>
              <option value="ch">China</option>
              <option value="gm">Germany</option>
            </select>
          </div>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">
          &copy; 2025 HireMaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
