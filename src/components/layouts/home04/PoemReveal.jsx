import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class PoemReveal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleOpen = () => {
        this.setState((prev) => ({ isOpen: !prev.isOpen }));
    };

    render() {
        const { t } = this.props;
        const { isOpen } = this.state;
        const poemLines = t('poemReveal.lines', { returnObjects: true });

        return (
            <section className="poem-reveal-section section-padding dark-bg-light" id="poem">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <article className="poem-reveal-card">
                                <div className="poem-reveal-header">
                                    <span className="poem-reveal-badge">{t('poemReveal.badge')}</span>
                                    <h3 className="heading-title poem-reveal-title">{t('poemReveal.title')}</h3>
                                    <p className="poem-reveal-intro">{t('poemReveal.intro')}</p>

                                    <button
                                        type="button"
                                        className="poem-reveal-toggle"
                                        onClick={this.toggleOpen}
                                        aria-expanded={isOpen}
                                        aria-controls="poem-content"
                                    >
                                        <span>{isOpen ? t('poemReveal.closeCta') : t('poemReveal.openCta')}</span>
                                        <i className={`fa fa-angle-down poem-reveal-arrow ${isOpen ? 'is-open' : ''}`}></i>
                                    </button>
                                </div>

                                <div id="poem-content" className={`poem-reveal-content ${isOpen ? 'is-open' : ''}`}>
                                    <div className="poem-reveal-content-inner">
                                        <div className="poem-reveal-body">
                                            {Array.isArray(poemLines) &&
                                                poemLines.map((line, index) => (
                                                    <p key={`poem-line-${index}`} className="poem-reveal-line">
                                                        {line}
                                                    </p>
                                                ))}

                                            <p className="poem-reveal-signature">{t('poemReveal.signature')}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(PoemReveal);
