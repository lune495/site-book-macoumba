import React, { Component } from 'react';
import { withTranslation } from "react-i18next";


class Pricing extends Component {
    constructor(props){
        super(props);
        this.state = {
            pricing: [
                {
                    id: 1,
                    titleKey: 'pricing.plans.usd.title',
                    price: '11.83',
                    subtitleKey: 'pricing.plans.usd.subtitle',
                    currency: '$',
                    textKey: 'pricing.plans.usd.text',
                    icon: 'fa fa-circle',
                    list1Key: 'pricing.plans.usd.features.1',
                    list2Key: 'pricing.plans.usd.features.2',
                    list3Key: 'pricing.plans.usd.features.3',
                    list4Key: 'pricing.plans.usd.features.4',
                    
                },
                {
                    id: 2,
                    titleKey: 'pricing.plans.eur.title',
                    price: '10.18',
                    subtitleKey: 'pricing.plans.eur.subtitle',
                    currency: '€',
                    textKey: 'pricing.plans.eur.text',

                    icon: 'fa fa-circle',
                    list1Key: 'pricing.plans.eur.features.1',
                    list2Key: 'pricing.plans.eur.features.2',
                    list3Key: 'pricing.plans.eur.features.3',
                    list4Key: 'pricing.plans.eur.features.4',
                    
                },
                {
                    id: 3,
                    titleKey: 'pricing.plans.jpy.title',
                    price: '1868',
                    subtitleKey: 'pricing.plans.jpy.subtitle',
                    currency: '¥',
                    textKey: 'pricing.plans.jpy.text',

                    icon: 'fa fa-circle',
                    list1Key: 'pricing.plans.jpy.features.1',
                    list2Key: 'pricing.plans.jpy.features.2',
                    list3Key: 'pricing.plans.jpy.features.3',
                    list4Key: 'pricing.plans.jpy.features.4',
                   
                },
            ]
        }
    }

    render() {
        const { t } = this.props;
        return (
            <section className="pricing section-padding dark-bg" id="pricing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">{t("pricing.title")}</h3>
                                <p>{t("pricing.description")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        {
                            this.state.pricing.map((data,i) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item mb-4 mb-lg-0" key={i}>
                                        <div className="pricing-header">
                                            <span>{t(data.titleKey)}</span>
                                        </div>
                                        <div className="price">
                                            <h3>{data.currency}{data.price}</h3>
                                            <p>{t(data.subtitleKey)}</p>
                                        </div>
                                        <p>{t(data.textKey)}</p>


                                        <ul className="pricing-features">
                                            <li><i className={data.icon}></i> {t(data.list1Key)}</li>
                                            <li><i className={data.icon}></i> {t(data.list2Key)}</li>
                                            <li><i className={data.icon}></i> {t(data.list3Key)}</li>
                                            <li><i className={data.icon}></i> {t(data.list4Key)}</li>
                                        </ul>

                                        <div className="pricing-footer">
                                            <a
                                                href="https://a.co/d/0gvO0sBk"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-main-2"
                                            >
                                                {t("pricing.cta")}
                                            </a>
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

export default withTranslation()(Pricing);
