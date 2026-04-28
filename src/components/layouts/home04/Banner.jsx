import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from "react-i18next";

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    titleKey: 'banner.items.expert',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    titleKey: 'banner.items.chapters',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    titleKey: 'banner.items.formats',
                },
                {
                    id: 4,
                    icon: 'fa fa-check',
                    titleKey: 'banner.items.audio',
                },
            ]
        }
    }
    render() {
        const { t } = this.props;
        return (
            <section className="banner pb-80 dark-bg" id="home">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="banner-img pe-3">
                                <img src="assets/images/banner/bd.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="banner-content  mt-4 mt-lg-0">
                                <span className="subheading">{t("banner.subheading")}</span>
                                <h1>{t("banner.title")}</h1>
                                <ul>
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {t(data.titleKey)}</li>
                                        ))
                                    }
                                </ul>
                                <a
                                    href="https://a.co/d/0gvO0sBk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-main"
                                >
                                    {t("banner.buyBook")}
                                </a>
                                <p>{t("banner.freeChapterQuestion")} <Link to="#">{t("banner.freeChapterCta")}</Link></p>
                            </div>
                        </div>
                       
                    </div> 
                </div> 
            </section>

        );
    }
}

export default withTranslation()(Banner);

