import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from "react-i18next";

class Cta extends Component {
    render() {
        const { t } = this.props;
        return (
        <section className="cta dark-bg">
            <div className="container">
                <div className="row justify-content-center cta-inner bg-white-50">
                    <div className="col-lg-8">
                        <div className="cta-content">
                            <span className="subheading2">{t("cta.subheading")}</span>
                            <h2 className="heading-title">{t("cta.title")}</h2>
                            <form action="#" className="subsribe">
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder={t("cta.emailPlaceholder")}/>
                                </div>
                                <Link to="#" className="btn btn-main w-100">{t("cta.button")}<i className="fa fa-angle-right ms-2"></i></Link>
                                <p>{t("cta.note")}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        );
    }
}

export default withTranslation()(Cta);
