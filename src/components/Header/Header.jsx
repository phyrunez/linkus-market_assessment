import { useRef, useEffect } from 'react'
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom/umd/react-router-dom.development';

import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
  {
    path: 'checkout',
    display: 'Checkout Product'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  // const menuRef = useRef(null);

  const navigate = useNavigate();

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const stickyHeaderFnc = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      }else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  };

  useEffect(() => {
    stickyHeaderFnc();
    return () => window.removeEventListener("scroll", stickyHeaderFnc);
  },[]);

  // const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate("/cart")
  }

  const navigateToLogin = () => {
    navigate("/login")
  }

  return (
    // <header className="header" ref={headerRef}>
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>LinkUs Stores</h1>
              </div>
            </div>

            {/* <div className="navigation" ref={menuRef} onClick={menuToggle}> */}
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((items, index) => (
                  <>
                    <li className="nav_items" key={index}>
                      <NavLink to={items.path} className={navClass => navClass.isActive ? 'nav__active' : ''}>
                        {items.display}
                      </NavLink>
                    </li>
                  </>
                ))}
               
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span onClick={navigateToLogin}>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile_menu">
              <span><i class="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header