import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from "react-i18next";

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    titleKey: 'about.items.awards.title',
                    textKey: 'about.items.awards.text',
                },
                {
                    id: 2,
                    icon: 'bi bi-support',
                    titleKey: 'about.items.devices.title',
                    textKey: 'about.items.devices.text',
                },
                {
                    id: 3,
                    icon: 'bi bi-rocket2',
                    titleKey: 'about.items.journey.title',
                    textKey: 'about.items.journey.text',
                }
            ]
        }
    }
    render() {
        const { t } = this.props;
        return (
        <section className="about-section section-padding dark-bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img">
                            <img src="assets/images/banner/bd.jpg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading">
                            <span className="subheading">{t("about.subheading")}</span>
                            <h3 className="heading-title">{t("about.title")}</h3>
                            <p className="tight-copy">{t("about.description")}</p>
                        </div>

                        {
                            this.state.about.map((data,i) => (
                                <div className="about-text-block" key={i}>
                                    <i className={data.icon}></i>
                                    <h4>{t(data.titleKey)}</h4>
                                    <p>{t(data.textKey)} </p>
                                </div>
                            ))
                        }
                        
                        <Link to="#" className="btn btn-main-2"><i className="fa fa-check me-2"></i>{t("about.cta")}</Link>
                    </div>
                </div>
            </div>
        </section>  
        );
    }
}

export default withTranslation()(About);
