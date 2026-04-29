import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import profileImage from "../../../assets/images/bg/profil.jpeg";

class Author extends Component {
    constructor(props){
        super(props);
        this.state = {
            showProfilePopup: false,
            isPopupClosing: false,
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    titleKey: 'author.items.item1',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    titleKey: 'author.items.item2',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    titleKey: 'author.items.item3',
                },
            ]
        }
        this.popupStartTimer = null;
        this.popupAutoCloseTimer = null;
        this.popupHideTimer = null;
    }
    componentDidMount() {
        this.popupStartTimer = setTimeout(() => {
            this.setState({ showProfilePopup: true });
            this.popupAutoCloseTimer = setTimeout(this.startPopupClose, 4400);
        }, 350);
    }

    componentWillUnmount() {
        clearTimeout(this.popupStartTimer);
        clearTimeout(this.popupAutoCloseTimer);
        clearTimeout(this.popupHideTimer);
    }

    startPopupClose = () => {
        this.setState({ isPopupClosing: true });
        this.popupHideTimer = setTimeout(() => {
            this.setState({ showProfilePopup: false, isPopupClosing: false });
        }, 900);
    };

    render() {
        const { t } = this.props;
        const { showProfilePopup, isPopupClosing } = this.state;
        return (
            <>
                {showProfilePopup && (
                    <div className={`profile-popup-overlay ${isPopupClosing ? "is-closing" : "is-open"}`}>
                        <div className="profile-popup-card" role="dialog" aria-live="polite">
                            <div className="profile-popup-glow"></div>
                            <img src={profileImage} alt="Macoumba Dieng" className="profile-popup-image" />
                            <p className="profile-popup-text">
                                Une vision, une voix, une présence: Macoumba Dieng vous accueille.
                            </p>
                        </div>
                    </div>
                )}
                <section className="author-section section-padding dark-bg-light" id="author">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-heading center-heading text-center mb-60">
                                    <h3 className="heading-title">{t("author.title")}</h3>
                                    <p>{t("author.description")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="auhtor-img mb-4 mb-lg-0">
                                     <img src={profileImage} alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="section-heading mb-0">
                                    <h3 className="heading-title">Macoumba Dieng</h3>
                                    <p className="tight-copy">{t("author.lead")}</p>
                                    <p className="tight-copy">{t("author.bio")}</p>
                                    <p className="tight-copy">{t("author.bio2")}</p>
                                    <p className="tight-copy">{t("author.bio3")}</p>
                                </div>

                                <div className="author-desc">
                                    {/* <ul className="list-unstyled">
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {t(data.titleKey)}</li>
                                        ))
                                    }
                                </ul> */}
                                    <p>{t("author.followPrefix")} <Link to="#">Twitter</Link>, <Link to="#">Facebook</Link> {t("author.or")} <Link to="#">LinkedIn</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default withTranslation()(Author);
