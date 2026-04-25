import React, { Component } from 'react';
import { withTranslation } from "react-i18next";

class FeatureLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collLeft: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    titleKey: 'features.left.item1.title',
                    textKey: 'features.left.item1.text',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    titleKey: 'features.left.item2.title',
                    textKey: 'features.left.item2.text',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    titleKey: 'features.left.item3.title',
                    textKey: 'features.left.item3.text',
                }
            ]
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="topic-items">
            {
                    this.state.collLeft.map((data,i) => (
                        <div className="topic-item" key={i}>
                            <div className="icon-box">
                                <i className={data.icon}></i>
                            </div>
                            <div className="topic-content">
                                <h4>{t(data.titleKey)}</h4>
                                <p>{t(data.textKey)}</p>
                            </div>
                        </div>
                    
                    ))
            }
            </div>
        );
    }

}

export default withTranslation()(FeatureLeft);
