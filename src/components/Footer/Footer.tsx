import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_1">
          <div className="footer_1-1">
            <div className="footer_logo">
              <img className="company_logo" src="/logo_2.png" alt="" />
              <p className="company_name">HyperLeen</p>
            </div>
            <p className="footer-p">
              Efforlessly manage and organize chats, tasks, and files in one
              centeral location with Qoterra chat management solutions
            </p>
            <div className="socialLinks">
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_1-2">
            <div className="col-name">
              <p className="heading">Navigate</p>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">Feature</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-name">
              <p className="heading">Support Us</p>
              <ul>
                <li>
                  <a href="">FAQs</a>
                  <a href="">Contact Us</a>
                  <a href="">Support Center</a>
                  <a href="">Security</a>
                </li>
              </ul>
            </div>
            <div className="col-name">
              <p className="heading">Resources</p>
              <ul>
                <li>
                  <a href="">Community</a>
                  <a href="">Contact</a>
                  <a href="">Terms of service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_2">
          <p className="copyright">
            &copy; {new Date().getFullYear()} hyperleen, All right reserved
          </p>
          <ul>
            <li>
              <a href="">Terms and Conditions ,</a>
            </li>
            <li>
              <a href="">Privacy Policy ,</a>
            </li>
            <li>
              <a href="">Cookies Policy ,</a>
            </li>
            <li>
              <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
