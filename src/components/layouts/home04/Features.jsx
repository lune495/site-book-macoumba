import React, { Component } from 'react';
import { FeatureLeft, FeatureRight } from './Features/index';
import { withTranslation } from "react-i18next";

class Features extends Component {
    render() {
        const { t } = this.props;
        return (
        <section className="book-preview section-padding dark-bg-light pb-0"  id="topics">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title text-white">{t("features.title")}</h3>
                            <p className="text-white">{t("features.description")}</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <FeatureLeft />
                    </div>

                    <div className="col-lg-6">
                        <FeatureRight />
                    </div>
                </div>
            </div>
        </section> 
        );
    }
}

export default withTranslation()(Features);
