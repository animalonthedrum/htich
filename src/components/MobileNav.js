
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';




const MobileNav = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
     <nav className={drawerClasses} onClick={props.click}>
     <div className='close' >
     {/* <div className="x"></div>
     <div className="x-"></div> */}
     </div>
      <ul>
            <li><Link onClick={props.click} activeClass="active" className="slide about" to="about" spy={true} smooth={true} duration={700}>About</Link></li>
            <li><Link onClick={props.click} activeClass="active" className="slide details" to="details" spy={true} smooth={true} duration={700}>Details</Link></li>
            <li><Link onClick={props.click} activeClass="active" className="slide story" to="story" spy={true} smooth={true} duration={700} >Story</Link></li>
            <li><Link onClick={props.click} activeClass="active" className="slide gallery" to="gallery" spy={true} smooth={true} duration={700}>Gallery</Link></li>
            <li><Link onClick={props.click} activeClass="active" className="slide footer" to="footer" spy={true} smooth={true} duration={700}>Footer</Link></li>
      </ul>
    </nav>
  );
};

export default MobileNav;