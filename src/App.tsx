import Impressum from './components/Impressum'
import Home from './components/Home';
import Datenschutz from './components/Datenschutz';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaAngleUp } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';
import CookieConsent from "react-cookie-consent";
import Logo from './media/logo.png';


export default function App() { 
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

  return (
    <>
    {/* <CookieConsent
      buttonText="Akzeptieren"
      buttonStyle={{background: "lightgrey"}}
      style={{ background: "#A89870"}}
      enableDeclineButton
      declineButtonText="Ablehnen"
      declineButtonStyle={{background: "lightgrey", color: "black"}}
      flipButtons
      overlay
      overlayStyle={{color: "white"}}
      debug={true}>
        Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell für den Betrieb der Seite, während andere uns helfen, 
        diese Website und die Nutzererfahrung zu verbessern (Tracking Cookies). Sie können selbst entscheiden, ob Sie die Cookies zulassen 
        möchten. Bitte beachten Sie, dass bei einer Ablehnung womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen. <Link to="/Datenschutz">Weitere Informationen</Link>
    </CookieConsent> */}
    <div className={`${isDesktopOrLaptop ? 'App' : 'App-mobile'}`}>
      <ScrollToTop /> {/* This is the ScrollToTop-Button */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="Datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

function Header() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
    <div className='Header'>
      <img src={Logo} height="80%" />
      {/* <span className='material-symbols-outlined'>
        phone_in_talk mail location_on
      </span> */}
    </div>
    {/* {isDesktopOrLaptop && <div className="App-header">
        <div className="header-content">
          <ul>
            <li>0851 - 379 341 70</li>
            <li>Bahnhofstr. 40 - 94032 Passau</li>
          </ul>
        </div>
    </div>}
    {isTabletOrMobile && <div className="App-header-mobile">
        <div className="header-content-mobile">
          <ul>
            <li>0851 - 379 341 70</li>
            <li>Bahnhofstr. 40</li>
            <li>94032 Passau</li>
          </ul>
        </div>
    </div>} */}
    </>
  )
}

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <>
      {/* {isDesktopOrLaptop && <div className="App-footer">
          <div className="footer-content">
            <p className='alignLeft'>
            <Link to="/Impressum" style={{padding: "0px 0px 0px 50px"}} className='link'>Impressum</Link>
              <Link to="/Datenschutz" style={{padding: "0px 20px"}} className='link'>Datenschutz</Link></p>
              <p className='alignRight'>©ha-consult</p>
          </div>
      </div>}
      {isTabletOrMobile && <div className="App-footer">
          <div className="footer-content-mobile">
          <p className='alignLeft'>
            <p style={{textAlign: "right", position: "absolute", right: "5vw"}}><Link to="/Impressum" className='link'>Impressum</Link> <br />
              <Link to="/Datenschutz" className='link'>Datenschutz</Link><br />
              <text style={{color: "#A89870"}}>©ha-consult</text></p></p>
          </div>
      </div>} */}
    </>
  )
}

// This is the ScrollToTop-Button
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 300) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  return (
      <div className="top-to-btm">
          {" "}
          {showTopBtn && (
              <FaAngleUp
                  className="icon-position icon-style"
                  onClick={goToTop}
              />
          )}{" "}
      </div>
  );
};