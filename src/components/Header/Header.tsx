import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Navbar/Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Nav />
      <div className="header_content">
        <button className="btn2">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          Find The Best Game Dev Partner <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <p className="header_heading">Game Development Outsourcing</p>
        <p className="header_details">
          Our team offers bespoke end-to-end game development outsourcing
          services. We gathered game industry veterans to create top-notch
          titles for mobile and desktop devices, consoles and wearables
        </p>
        <button className="getstartnow_btn">Get Start Now</button>
      </div>
      <img
        className="character_1"
        src="https://s3-alpha-sig.figma.com/img/1805/f869/a567563411ce664a5bf97de54ae91ba2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FRYq3dJthHRABhG9w0DSRBvqNQNKpAvRUsgUXT6PsRYQl8L0Kye54nEQmvobyrNP1S73SCRpHgwyokxTtJMhhmTENMzulwj8muLsw-5Yvw8t0O3x~a~2m22Cr2lvd-Of6LBVrxdggGhV0q2ltKS47J6O5aSKcG1-QDkxJC4W3LCAkJ~flwMpwxi5H1BxD6mEc5CXUSJB8n~f8czF4EpjBBu1dWLYYLt96oBFIF7Foefvvr4Zh8JjV~xLWBslAn7oHUopGEAZCZHHaL20-I~Z7y6WBRUVqS6gVPFQE7fO3PrOCNGJVpxuGXDo8hNGqRimriqiG8494rVZKtT7WiAPMA__"
        alt=""
      />
      <img className="character_2" src="/character_2.png" alt="" />
    </div>
  );
};

export default Header;
