import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class Feature2 extends Component {
    constructor(props){
        super(props);
        this.state = {
           feature: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    titleKey: 'feature2.items.entrepreneurs.title',
                    textKey: 'feature2.items.entrepreneurs.text'
                },
                {
                    id: 2,
                    icon: 'bi bi-article',
                    titleKey: 'feature2.items.projectManagers.title',
                    textKey: 'feature2.items.projectManagers.text'
                },
                {
                    id: 3,
                    icon: 'bi bi-headset',
                    titleKey: 'feature2.items.students.title',
                    textKey: 'feature2.items.students.text'
                }
            ]
        }
    }

    render() {
        const { t } = this.props;
        return (
            <section className="feature-2 pt-100 dark-bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">{t("feature2.title")}</h3>
                                <p>{t("feature2.description")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        {
                            this.state.feature.map((data,i) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-style-2 mb-4 mb-lg-0" key={i}>
                                        <i className={data.icon}></i>
                                        <div className="feature-text">
                                            <h4>{t(data.titleKey)}</h4>
                                            <p>{t(data.textKey)}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                        
                    </div>
                </div>
            </section> 
        );
    }
}

export default withTranslation()(Feature2);
