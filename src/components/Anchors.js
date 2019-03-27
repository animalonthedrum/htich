import React from 'react';
import { Link } from 'react-scroll';
import ToggleButton from './ToggleButton';

const Anchors = props => (
        <nav>
                <ul className="navbar">
                    <li><Link activeClass="active" className="slide home" to="homeHero" spy={false} smooth={true} duration={700}></Link></li>
                    <li><Link activeClass="active" className="slide about" to="about" spy={true} smooth={true} duration={700}>About</Link></li>
                    <li><Link activeClass="active" className="slide details" to="details" spy={true} smooth={true} duration={700}>Details</Link></li>
                    <li><Link activeClass="active" className="slide story" to="story" spy={true} smooth={true} duration={700} >Story</Link></li>
                    <li><Link activeClass="active" className="slide gallery" to="gallery" spy={true} smooth={true} duration={700}>Gallery</Link></li>
                    <li><Link activeClass="active" className="slide footer" to="footer" spy={true} smooth={true} duration={700}>Footer</Link></li>
                    <li><a className='button' href="https://www.outdoorsy.com/">Book Now</a></li>
                    {/* <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
                    <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
                    <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
                    <li> <a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a></li>
                    <li> <a onClick={() => scroll.scrollMore(1000, { delay: 1500 })}>Scroll 1000 More! ( delay ) </a></li>
                    <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                    <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                    <li><a className="test1" to="test1" onClick={() => this.scrollTo()} >Scroll to element</a></li>
                    <li><a className="test1" to="test1" onClick={() => this.scrollToWithContainer()} >Scroll to element within container</a></li> */}
                </ul>
                <div className="toolbar__toggle-button">
                <ToggleButton click={props.navClickHandler} />
                </div>
          </nav>
    )

export default Anchors