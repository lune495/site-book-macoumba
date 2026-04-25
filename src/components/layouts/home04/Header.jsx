import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import links from '../links';
import menus from '../menus2';
import { withTranslation } from "react-i18next";

class Header extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <header className="main-header">
                <div className="site-navigation main_menu" id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img src="assets/images/logo-light.png" alt="Bookhunt" className="img-fluid"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>
                           
                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle"  
                                            id="navbar2" role="button" data-toggle="dropdown" aria-haspopup="true" 
                                            aria-expanded="false">{t("header.home")} <i className="fa fa-angle-down"></i>
                                        </Link>
                                        <ul className="dropdown-menu" >
                                            {
                                                links.map((data,i) => (
                                                    
                                                    <Link key={i} className="dropdown-item" to={data.tolink} onClick={() => {window.location.href=data.tolink}}>
                                                        {data.namelink}
                                                    </Link>
                                                ))
                                            }
                                        </ul>
                                    </li>

                                    {
                                        menus.map((menu,i) => (
                                            <li className="nav-item " key={i}><HashLink to={menu.tomenu} className="nav-link js-scroll-trigger">{menu.namemenu}</HashLink></li>
                                        ))
                                    }  
                                    
                                </ul>
                            </div> 

                            <div className="header-right-info">
                            <button type="button"
                                className="btn btn-outline-light btn-small me-2"
                                onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
                                >
                                {i18n.language === "fr" ? "EN" : "FR"}
                            </button>

                                <a
                                    href="https://a.co/d/0gvO0sBk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-dark-bg btn-small"
                                >
                                    <i className="fa fa-shopping-cart me-2"></i>
                                    {t("header.buyNow")}
                                </a>
                            </div>
                        </div> 
                    </nav>
                </div>
            </header>
        );
    }
}

export default withTranslation()(Header);
