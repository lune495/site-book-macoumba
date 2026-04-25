import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { withTranslation } from "react-i18next";

class Contact extends Component {
    render() {
        const { t } = this.props;
        return (
                                    
            <section className="section-padding contact dark-bg-light" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">{t("contact.title")}</h3>
                                <p>{t("contact.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-sm-12 col-md-12">
                            <form className="contact__form form-row contact-form " method="post" action="mail.php" id="contactForm" >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg" style={{display:'none'}} role="alert">
                                            {t("contact.success")}
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder={t("contact.namePlaceholder")}/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="email" id="email" className="form-control" placeholder={t("contact.emailPlaceholder")}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder={t("contact.messagePlaceholder")}></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="d-lg-flex justify-content-between mt-4">
                                            <p>{t("contact.note")}</p>
                                            <input id="submit" name="submit" type="submit" className="btn btn-main-2" value={t("contact.send")}/>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Contact);
