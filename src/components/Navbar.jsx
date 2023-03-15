import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { styles } from "../styles";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { logo, menu, close, tf, nlogo } from "../assets";
import { languages } from '../language/data'; 
import { NavDropdown } from 'react-bootstrap';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLang } from "../Global/state";
import getData from "../constants/GetData";
const LogoContainer = styled.div`
  position: relative;
  z-index: 1;
  width:150px;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: auto;
`;
const Navbar = () => {
  const { language, setLanguage, } = useLang();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  var newData = getData(language).navLinks;
    var langna = getData(language).langnya;

    const [show, setShow] = useState(true);

  const handleSelect = (eventKey) => {
    setLanguage(eventKey);
    setShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         <LogoContainer>
        <LogoImage src={nlogo} alt="Gambar Logo" />
        <img src={tf} alt="Logo Header Nav" />
      </LogoContainer>
         
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
           Nunu Fatulah
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {newData.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`/${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        
  <BrowserView className="absolut">
      <NavDropdown
        title={langna}
        id="language-dropdown"
        class="absolute right-15 mt-1 w-80 rounded-md shadow-xl"
            show={show}
            onClick={() => setShow(!show)}
        onSelect={handleSelect}
      >
            {languages.map((lang) => (
              <NavDropdown.Item
                key={lang.code}
                eventKey={lang.code}
                onClick={() => setShow(!show)}
                className={`${
              show ? "hidden" : "flex" } p-1  mt-1 text-orange-800 hover:bg-pink-100`} >
            <div>
              <span className={`fi fi-${lang.flag}`}></span>  {lang.name}
            </div>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </BrowserView>


{/* <BrowserView className="absolut">
          
            <NavDropdown title="Language" id="language-dropdown" class="absolute right-5 mt-2 py-2 w-80 rounded-md shadow-xl">
              {languages.map((lang) => (
                <NavDropdown.Item key={lang.code}
                  href={`#${lang.code}`}
                  onClick={() => setLanguage(lang.code)}
                  class="block px-4 py-2 text-gray-800 hover:bg-pink-100">
                  <div> <span class={`fi fi-${lang.flag}`}></span> {lang.name}</div> 
                </NavDropdown.Item> 
              ))}
            </NavDropdown>
 </BrowserView> */}




        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {newData.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
               {languages.map((lang) => (
                 <li onClick={() => setLanguage(lang.code)}><span class={`fi fi-${lang.flag}`}></span> {lang.name }</li>
                    ))}
            </ul>
   
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
