import React from "react";
import moment from "moment";

export default function Navbar(props){
  let time = moment().format('dddd, Do MMMM YYYY');
  return (
  <nav className={`container-fluid navbarMargin navbar bg-${props.mode} stickyNavbar sticky-top`}>
  <div className="container-fluid"> 
    <div>
    <p  className={`navbar-brand p-0 m-0 d-block text-${props.mode === 'light'?'dark':'light'}`} href="/"><img src="https://i.ibb.co/BwM2FdC/logo.png" className=" bg-success" width="40" height="40" id="logoimg" alt="" /><span id="theSurajPathshala">The Suraj Pathshala</span></p>
    </div>
    <div><a href="https://play.google.com/store/apps/details?id=co.jones.ajwrr" target="_blank" className={`d-inline text-${props.mode === 'light'?'dark':'light'} border-${props.mode === 'light'?'dark':'light'}`} id="dawmloadLogo" style={{"boxShadow":"0px 0px 5px 1px"}}>Apk<i className="bi bi-download ps-1" id="dawnloadbtn" ></i></a>
        <i className={` bi bi-emoji-smile-fill me-2 text-${props.mode === 'light'?'dark':'light'}`} id="modebtn" onClick={props.toggleMode} ></i>
    <button className={`navbar-toggler bg-${props.mode === 'light'?'light':'secondary'}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>

    <div className={`offcanvas offcanvas-end bg-${props.mode === 'light'?'light':'dark'}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <b className={`offcanvas-title text-${props.mode === 'light'?'dark':'light'}`} id="offcanvasNavbarLabel"><i className="bi bi-calendar-range-fill pe-2"></i>{time}</b>
        <button type="button" className="btn-close bg-light " data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body ">

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle active text-${props.mode === 'light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cources
            </a>
            <ul className={`dropdown-menu border-${props.mode === 'dark'?'light':'dark'} bg-${props.mode === 'light'?'light':'dark'}`}>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Class - 6<sup>th</sup> (Jac & CBSE Board)</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Class - 7<sup>th</sup> (Jac & CBSE Board)</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Class - 8<sup>th</sup> (Jac & CBSE Board)</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Class - 9<sup>th</sup> (Jac & CBSE Board)</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Class - 10<sup>th</sup> (Jac & CBSE Board)</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText border-top border-dark`} href="/">Mid Brain Activation</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Handwriting</a></li>
              <li><a className={`dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText`} href="/">Abacus</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode === 'dark'?'light':'dark'}`} href="/">Our Team</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode === 'dark'?'light':'dark'}`} href="/">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle active text-${props.mode === 'dark'?'light':'dark'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Social Media handles
            </a>
            <ul className={`dropdown-menu border-${props.mode === 'dark'?'light':'dark'} bg-${props.mode === 'light'?'light':'dark'}`}>
              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`}  href="https://www.youtube.com/@surajsir3716/channels" target="_blank" ><i className="bi bi-youtube px-2 text-danger"></i>YouTube</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr"><i className="bi bi-linkedin px-2" style={{"color":"blue"}}></i>Linkdin</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr" ><i className="bi bi-whatsapp px-2 text-success"></i>Whatsapp</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr" ><i className="bi bi-facebook px-2 text-primary"></i>Facebook</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr" ><i className="bi bi-instagram px-2" style={{"color":"#ee7f7f"}}></i>Instagram</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr" ><i className="bi bi-messenger px-2 text-info"></i>Messenger</a></li>

              <li><a className={`text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`} href="https://play.google.com/store/apps/details?id=co.jones.ajwrr"><i className="bi bi-twitter px-2 text-info"></i>Twitter</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle active text-${props.mode === 'light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact Us
            </a>
            <ul className={`dropdown-menu border-${props.mode === 'dark'?'light':'dark'} bg-${props.mode === 'light'?'light':'dark'}`}>

            <li><a className={` m-0 text-${props.mode === 'dark'?'light':'dark'} dropdown-item inverText`}><i className="bi bi-envelope-fill px-2 text-primary" href="https://suraj.dto@gmail.com"></i> : suraj.dto@gmail.com</a></li>
              <li><p className={` m-0 dropdown-item text-${props.mode === 'light'?'dark':'light'} inverText border-top border-dark`}><i className="bi bi-telephone-fill px-2 text-primary"></i> : 8709408390</p></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
}
