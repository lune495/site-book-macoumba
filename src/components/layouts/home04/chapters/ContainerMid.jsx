import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class ContainerMid extends Component {
    constructor(props){
        super(props);
        this.state = {
            collMid: [
                {
                    id: 1,
                    subtitleKey: 'chapter.items.chapter4.subtitle',
                    titleKey: 'chapter.items.chapter4.title',
                    textKey: 'chapter.items.chapter4.text'
                },
                {
                    id: 2,
                    subtitleKey: 'chapter.items.chapter5.subtitle',
                    titleKey: 'chapter.items.chapter5.title',
                    textKey: 'chapter.items.chapter5.text'
                },
                {
                    id: 3,
                    subtitleKey: 'chapter.items.chapter6.subtitle',
                    titleKey: 'chapter.items.chapter6.title',
                    textKey: 'chapter.items.chapter6.text'
                }
            ]
        }
    }
    render() {
        const { t } = this.props;
        return (
            <div className="chapter-list border-right-0">
                 {
                    this.state.collMid.map((data,i)=> (
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

export default withTranslation()(ContainerMid);
