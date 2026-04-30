import React, { Component } from 'react';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';

class BuyerVoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonials: [
                {
                    id: 1,
                    img: './assets/images/clients/homme-cam.jpeg',
                    name: 'Abib K.',
                    quoteKey: 'buyerVoices.items.item1.quote',
                    locationKey: 'buyerVoices.items.item1.location',
                    storeKey: 'buyerVoices.items.item1.store'
                },
                {
                    id: 2,
                    img: './assets/images/clients/homme-civ.jpeg',
                    name: 'Diawara.',
                    quoteKey: 'buyerVoices.items.item2.quote',
                    locationKey: 'buyerVoices.items.item2.location',
                    storeKey: 'buyerVoices.items.item2.store'
                },
                {
                    id: 3,
                    img: './assets/images/clients/img.jpeg',
                    name: 'Moussa Faye',
                    quoteKey: 'buyerVoices.items.item3.quote',
                    locationKey: 'buyerVoices.items.item3.location',
                    storeKey: 'buyerVoices.items.item3.store'
                },
                // {
                //     id: 4,
                //     img: './assets/images/clients/Homme-CIV.png',
                //     name: 'Ibra D.',
                //     quoteKey: 'buyerVoices.items.item4.quote',
                //     locationKey: 'buyerVoices.items.item4.location',
                //     storeKey: 'buyerVoices.items.item4.store'
                // },
                {
                    id: 4,
                    img: './assets/images/clients/img3.jpeg',
                    name: 'Phd, Alpha Diedhiou',
                    quoteKey: 'buyerVoices.items.item4.quote',
                    locationKey: 'buyerVoices.items.item4.location',
                    storeKey: 'buyerVoices.items.item4.store'
                }
            ]
        };
    }

    render() {
        const { t } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 700,
            autoplaySpeed: 2800,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: { slidesToShow: 2, slidesToScroll: 1 }
                },
                {
                    breakpoint: 768,
                    settings: { slidesToShow: 1, slidesToScroll: 1 }
                }
            ]
        };

        return (
            <section className="section-padding dark-bg-light" id="testimonial">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">{t('buyerVoices.title')}</h3>
                                <p>{t('buyerVoices.description')}</p>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings}>
                        {this.state.testimonials.map((item) => (
                            <div key={item.id} className="px-2">
                                <article
                                    style={{
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        minHeight: '460px',
                                        background: '#141723',
                                        border: '1px solid rgba(255,255,255,0.12)'
                                    }}
                                >
                                    <div style={{ height: '300px', overflow: 'hidden' }}>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>

                                    <div
                                        style={{
                                            padding: '18px',
                                            background:
                                                'linear-gradient(180deg, rgba(17,18,27,0.95) 0%, rgba(8,10,16,0.98) 100%)'
                                        }}
                                    >
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h5 className="text-white mb-0">{item.name}</h5>
                                            <span className="badge bg-warning text-dark">{t(item.locationKey)}</span>
                                        </div>
                                        <p className="text-white mb-2" style={{ minHeight: '66px' }}>
                                            {t(item.quoteKey)}
                                        </p>
                                        <p className="mb-0 text-light">
                                            <strong>{t('buyerVoices.boughtOnLabel')}:</strong> {t(item.storeKey)}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default withTranslation()(BuyerVoices);
