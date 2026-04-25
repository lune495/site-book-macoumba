import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class ContainerLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collLeft: [
                {
                    id: 1,
                    subtitleKey: 'chapter.items.chapter1.subtitle',
                    titleKey: 'chapter.items.chapter1.title',
                    textKey: 'chapter.items.chapter1.text'
                },
                // {
                //     id: 2,
                //     subtitleKey: 'chapter.items.chapter2.subtitle',
                //     titleKey: 'chapter.items.chapter2.title',
                //     textKey: 'chapter.items.chapter2.text'
                // },
                // {
                //     id: 3,
                //     subtitleKey: 'chapter.items.chapter3.subtitle',
                //     titleKey: 'chapter.items.chapter3.title',
                //     textKey: 'chapter.items.chapter3.text'
                // }
            ]
        }
    }
    render() {
        const { t } = this.props;
        return (
            <div className="chapter-list border-right-0">
                 {
                    this.state.collLeft.map((data,i) => (
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

export default withTranslation()(ContainerLeft);
