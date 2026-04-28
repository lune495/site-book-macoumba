import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class PoemReveal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePoemIndex: 0
        };
    }

    splitPoems = (poemLines) => {
        if (!Array.isArray(poemLines)) {
            return [];
        }

        const poems = [];
        let currentPoem = null;

        poemLines.forEach((rawLine) => {
            const line = typeof rawLine === 'string' ? rawLine.trim() : '';
            const titleMatch = line.match(/^POEME?\s*:\s*(.+)$/i);

            if (titleMatch) {
                if (currentPoem) {
                    poems.push(currentPoem);
                }
                currentPoem = {
                    title: titleMatch[1],
                    lines: []
                };
                return;
            }

            if (!currentPoem) {
                currentPoem = { title: '', lines: [] };
            }

            currentPoem.lines.push(line);
        });

        if (currentPoem) {
            poems.push(currentPoem);
        }

        return poems;
    };

    handleTabChange = (index) => {
        this.setState({ activePoemIndex: index });
    };

    render() {
        const { t } = this.props;
        const { activePoemIndex } = this.state;
        const poemLines = t('poemReveal.lines', { returnObjects: true });
        const poems = this.splitPoems(poemLines);
        const selectedIndex = poems[activePoemIndex] ? activePoemIndex : 0;
        const selectedPoem = poems[selectedIndex] || null;

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
                                </div>

                                <div className="poem-reveal-tabs" role="tablist" aria-label={t('poemReveal.title')}>
                                    {poems.map((poem, poemIndex) => (
                                        <button
                                            key={`poem-tab-${poemIndex}`}
                                            type="button"
                                            role="tab"
                                            id={`poem-tab-${poemIndex}`}
                                            aria-selected={selectedIndex === poemIndex}
                                            aria-controls={`poem-panel-${poemIndex}`}
                                            className={`poem-reveal-tab ${selectedIndex === poemIndex ? 'is-active' : ''}`}
                                            onClick={() => this.handleTabChange(poemIndex)}
                                        >
                                            {poem.title || `Poem ${poemIndex + 1}`}
                                        </button>
                                    ))}
                                </div>

                                <div className="poem-reveal-content is-open">
                                    <div className="poem-reveal-content-inner">
                                        <div
                                            className="poem-reveal-body poem-reveal-panel"
                                            role="tabpanel"
                                            id={`poem-panel-${selectedIndex}`}
                                            aria-labelledby={`poem-tab-${selectedIndex}`}
                                        >
                                            {selectedPoem && selectedPoem.title && (
                                                <h4 className="poem-reveal-poem-title">{selectedPoem.title}</h4>
                                            )}

                                            {selectedPoem &&
                                                selectedPoem.lines.map((line, lineIndex) =>
                                                    line ? (
                                                        <p key={`poem-line-${selectedIndex}-${lineIndex}`} className="poem-reveal-line">
                                                            {line}
                                                        </p>
                                                    ) : (
                                                        <div
                                                            key={`poem-break-${selectedIndex}-${lineIndex}`}
                                                            className="poem-reveal-break"
                                                            aria-hidden="true"
                                                        ></div>
                                                    )
                                                )}

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
