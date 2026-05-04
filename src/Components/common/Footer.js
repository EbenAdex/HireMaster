import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import HireMasterLogo from "./HireMasterLogo";

function Footer() {
  return (
    <footer className="footer footer--modern">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand-block">
            <div className="footer__brand">
              <HireMasterLogo size={46} />
              <div>
                <h3>HireMaster</h3>
                <p>A structured opportunity and recruitment platform.</p>
              </div>
            </div>

            <p className="footer__description">
              HireMaster helps students, graduates, professionals, employers,
              and institutions manage applications, opportunities, and hiring
              in a more organized way.
            </p>

            <div className="footer__subscribe">
              <h4>Stay Updated</h4>
              <div className="footer__subscribe-row">
                <input type="email" placeholder="Enter your email" />
                <button type="button">Subscribe</button>
              </div>
              <small>Receive updates on opportunities and platform improvements.</small>
            </div>

            <div className="footer__socials">
              <span>Follow Us:</span>
              <a href="/" onClick={(e) => e.preventDefault()}><FaXTwitter /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FaLinkedinIn /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FaInstagram /></a>
              <a href="/" onClick={(e) => e.preventDefault()}><FaGithub /></a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4>Platform</h4>
            <Link to="/about">About</Link>
            <Link to="/opportunities">Opportunities</Link>
            <Link to="/partner-with-us">Partner With Us</Link>
            <Link to="/support">Support Chat</Link>
          </div>

          <div className="footer__links-group">
            <h4>Resources</h4>
            <Link to="/resources">Career Guides</Link>
            <Link to="/resources">Application Support</Link>
            <Link to="/resources">Interview Help</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div className="footer__contact-block">
            <h4>Need Help?</h4>
            <p>Contact HireMaster support for assistance with opportunities, applications, and platform access.</p>
            <a href="mailto:support@hiremaster.com">support@hiremaster.com</a>
            <small>Response time: within 24 hours</small>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 HireMaster. All rights reserved.</p>

          <div className="footer__bottom-links">
  <Link to="/privacy-policy">Privacy Policy</Link>
  <Link to="/terms-of-service">Terms of Service</Link>
  <Link to="/cookie-policy">Cookie Policy</Link>
</div>

          <p className="footer__status">● Platform active</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;