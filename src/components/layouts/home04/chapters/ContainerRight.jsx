import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class ContainerRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            collRight: [
                {
                    id: 1,
                    subtitleKey: 'chapter.items.chapter7.subtitle',
                    titleKey: 'chapter.items.chapter7.title',
                    textKey: 'chapter.items.chapter7.text'
                },
                {
                    id: 2,
                    subtitleKey: 'chapter.items.chapter8.subtitle',
                    titleKey: 'chapter.items.chapter8.title',
                    textKey: 'chapter.items.chapter8.text'
                },
                {
                    id: 3,
                    subtitleKey: 'chapter.items.chapter9.subtitle',
                    titleKey: 'chapter.items.chapter9.title',
                    textKey: 'chapter.items.chapter9.text'
                }
            ]
        }
    }
    render() {
        const { t } = this.props;
        return (
            <div className="chapter-list border-right-0">
                 {
                    this.state.collRight.map((data,i) => (
                        <div className="chapter-item" key={i}>
                            <h4><span>{t(data.subtitleKey)} </span> {t(data.titleKey)}</h4>
                            <p>{t(data.textKey)} </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withTranslation()(ContainerRight);
