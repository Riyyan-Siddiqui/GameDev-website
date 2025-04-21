import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
          <img src="/company_logo.png" alt="" />
          <ul>
            <li><a href="">Features</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">How it Works</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">FAQs</a></li>
          </ul>
          <button className='contact_btn'>Contact us <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
  )
}

export default Nav
