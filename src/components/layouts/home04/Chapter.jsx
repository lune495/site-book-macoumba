import React, { Component } from 'react';
import { ContainerLeft, ContainerMid,ContainerRight } from './chapters/index';
import { withTranslation } from "react-i18next";


class Chapter extends Component {
    render() {
        const { t } = this.props;
        return (
        <section className="chapter-section section-padding dark-bg" id="chapters">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="center-heading mb-60">
                            <h3 className="heading-title">{t("chapter.title")}</h3>
                            <p>{t("chapter.description")}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <ContainerLeft />
                    </div>
{/* 
                    <div className="col-lg-4 col-md-6">
                        <ContainerMid />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <ContainerRight />
                    </div> */}
                </div>
            </div>
        </section> 
        );
    }
}

export default withTranslation()(Chapter);
