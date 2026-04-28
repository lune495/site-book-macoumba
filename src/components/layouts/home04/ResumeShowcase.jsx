import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ResumeShowcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activeTab: 'profile'
        };

        this.tabs = ['profile', 'experience', 'education', 'skills'];
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isOpen !== this.state.isOpen) {
            document.body.classList.toggle('resume-modal-open', this.state.isOpen);
        }
    }

    componentWillUnmount() {
        document.body.classList.remove('resume-modal-open');
    }

    openModal = () => {
        this.setState({ isOpen: true });
    };

    closeModal = () => {
        this.setState({ isOpen: false });
    };

    selectTab = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const { t } = this.props;
        const { isOpen, activeTab } = this.state;
        const profileHighlights = t('resumeShowcase.profile.highlights', { returnObjects: true });
        const experiences = t('resumeShowcase.experience.items', { returnObjects: true });
        const education = t('resumeShowcase.education.items', { returnObjects: true });
        const skills = t('resumeShowcase.skills.items', { returnObjects: true });
        const languages = t('resumeShowcase.languages.items', { returnObjects: true });

        return (
            <section className="resume-showcase-section section-padding dark-bg-light" id="resume">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <article className="resume-showcase-card">
                                <div className="resume-showcase-head">
                                    <span className="resume-showcase-badge">{t('resumeShowcase.badge')}</span>
                                    <h3 className="heading-title resume-showcase-title">{t('resumeShowcase.title')}</h3>
                                    <p className="resume-showcase-intro">{t('resumeShowcase.intro')}</p>
                                </div>

                                <div className="resume-showcase-profile">
                                    <div>
                                        <h4 className="resume-name">{t('resumeShowcase.profile.name')}</h4>
                                        <p className="resume-role">{t('resumeShowcase.profile.headline')}</p>
                                        <p className="resume-contact">
                                            <strong>{t('resumeShowcase.profile.contact.phoneLabel')}:</strong>{' '}
                                            {t('resumeShowcase.profile.contact.phone')}
                                        </p>
                                        <p className="resume-contact">
                                            <strong>{t('resumeShowcase.profile.contact.emailLabel')}:</strong>{' '}
                                            {t('resumeShowcase.profile.contact.email')}
                                        </p>
                                    </div>

                                    <div className="resume-showcase-actions">
                                        <button type="button" className="resume-open-btn" onClick={this.openModal}>
                                            {t('resumeShowcase.openCta')}
                                        </button>
                                        <a
                                            className="resume-download-link"
                                            href={t('resumeShowcase.filePath')}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t('resumeShowcase.downloadCta')}
                                        </a>
                                    </div>
                                </div>

                                <ul className="resume-highlight-list">
                                    {Array.isArray(profileHighlights) &&
                                        profileHighlights.map((item, index) => (
                                            <li key={`resume-highlight-${index}`}>{item}</li>
                                        ))}
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>

                <div className={`resume-modal-backdrop ${isOpen ? 'is-open' : ''}`} onClick={this.closeModal}>
                    <div className="resume-modal-shell" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="resume-modal-close" onClick={this.closeModal}>
                            {t('resumeShowcase.closeCta')}
                        </button>

                        <div className="resume-modal-tabs" role="tablist" aria-label={t('resumeShowcase.title')}>
                            {this.tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab}
                                    className={`resume-tab ${activeTab === tab ? 'is-active' : ''}`}
                                    onClick={() => this.selectTab(tab)}
                                >
                                    {t(`resumeShowcase.tabs.${tab}`)}
                                </button>
                            ))}
                        </div>

                        <div className="resume-modal-panel">
                            {activeTab === 'profile' && (
                                <div className="resume-panel-block">
                                    <h4>{t('resumeShowcase.tabs.profile')}</h4>
                                    <p>{t('resumeShowcase.profile.summary')}</p>
                                </div>
                            )}

                            {activeTab === 'experience' && (
                                <div className="resume-panel-block">
                                    <h4>{t('resumeShowcase.tabs.experience')}</h4>
                                    {Array.isArray(experiences) &&
                                        experiences.map((item, index) => (
                                            <article className="resume-entry" key={`exp-${index}`}>
                                                <p className="resume-entry-meta">{item.period}</p>
                                                <h5>{item.role}</h5>
                                                <p className="resume-entry-company">{item.company}</p>
                                                <p>{item.summary}</p>
                                            </article>
                                        ))}
                                </div>
                            )}

                            {activeTab === 'education' && (
                                <div className="resume-panel-block">
                                    <h4>{t('resumeShowcase.tabs.education')}</h4>
                                    {Array.isArray(education) &&
                                        education.map((item, index) => (
                                            <article className="resume-entry" key={`edu-${index}`}>
                                                <p className="resume-entry-meta">{item.period}</p>
                                                <h5>{item.title}</h5>
                                                <p className="resume-entry-company">{item.school}</p>
                                            </article>
                                        ))}
                                </div>
                            )}

                            {activeTab === 'skills' && (
                                <div className="resume-panel-block">
                                    <h4>{t('resumeShowcase.tabs.skills')}</h4>
                                    <ul className="resume-bullet-list resume-bullet-list-contrast">
                                        {Array.isArray(skills) &&
                                            skills.map((item, index) => <li key={`skill-${index}`}>{item}</li>)}
                                    </ul>
                                    <h4 className="resume-subtitle">{t('resumeShowcase.languages.title')}</h4>
                                    <ul className="resume-bullet-list resume-bullet-list-contrast">
                                        {Array.isArray(languages) &&
                                            languages.map((item, index) => <li key={`lang-${index}`}>{item}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(ResumeShowcase);
