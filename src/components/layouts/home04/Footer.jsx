import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { withTranslation } from 'react-i18next';

class Footer extends Component {
    render() {
        const { t } = this.props;
        return (          
            <section className="footer pt-120 dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 me-auto col-sm-6 col-md-12">
                            <div className="widget footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">{t('footer.brand')}</h5>
                                <p className="mt-3">{t('footer.description')}</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-sm-6 col-md-12">
                            <div className="footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">{t('footer.informationTitle')}</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <ul className="list-unstyled footer-links">
                                        <li><HashLink to="#about">{t('footer.links.aboutBook')}</HashLink></li>
                                        <li><HashLink to="#poem">{t('footer.links.poetry')}</HashLink></li>
                                        <li><HashLink to="#resume">{t('footer.links.resume')}</HashLink></li>
                                        <li><HashLink to="#contact">{t('footer.links.contact')}</HashLink></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer-widget footer-contact mb-5 mb-lg-0">
                                        <ul className="list-unstyled">
                                            <li>{t('footer.contact.phone')}</li>
                                            <li>{t('footer.contact.location')}</li>
                                            <li>{t('footer.contact.email')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>{t('footer.copyright')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            
            
                <div className="fixed-btm-top">
                    <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></a>
                </div>
            </section>


        );
    }
}

export default withTranslation()(Footer);
