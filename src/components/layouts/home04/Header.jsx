import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import menus from '../menus2';
import { withTranslation } from "react-i18next";

class Header extends Component {
    render() {
        const { t, i18n } = this.props;
        const menuLabelByAnchor = {
            '#about': 'header.nav.about',
            '#chapters': 'header.nav.chapters',
            '#author': 'header.nav.author',
            '#contact': 'header.nav.contact'
        };

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
                                    <li className="nav-item">
                                        <HashLink to="#home" className="nav-link js-scroll-trigger">
                                            {t("header.home")}
                                        </HashLink>
                                    </li>
                                    {menus
                                        .filter((menu) => menu.tomenu !== '#testimonial')
                                        .map((menu, i) => (
                                            <li className="nav-item" key={i}>
                                                <HashLink to={menu.tomenu} className="nav-link js-scroll-trigger">
                                                    {t(menuLabelByAnchor[menu.tomenu] || 'header.home')}
                                                </HashLink>
                                            </li>
                                        ))}
                                    <li className="nav-item">
                                        <HashLink to="#testimonial" className="nav-link js-scroll-trigger">
                                            {t('header.nav.testimonial')}
                                        </HashLink>
                                    </li>
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
