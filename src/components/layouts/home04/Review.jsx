import React, { Component } from 'react';
import Slider from "react-slick";
import { withTranslation } from "react-i18next";

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './assets/images/clients/homme-cam.jpeg',
                    alt: 'images',
                    quoteTextKey: 'review.items.item1.quote',
                    textKey: 'review.items.item1.text',
                    name: 'Jean Dupont',
                    desigantionKey: 'review.items.item1.designation',
                },
                {
                    id: 2,
                    img: './assets/images/clients/homme-civ.jpeg',
                    alt: 'images',
                    quoteTextKey: 'review.items.item2.quote',
                    textKey: 'review.items.item2.text',
                    name: 'Marie Curie',
                    desigantionKey: 'review.items.item2.designation',
                },
                {
                    id: 3,
                    img: './assets/images/clients/Homme-Mali.png',
                    alt: 'images',
                    quoteTextKey: 'review.items.item3.quote',
                    textKey: 'review.items.item3.text',
                    name: 'Paul Martin',
                    desigantionKey: 'review.items.item3.designation',
                },
                {
                    id: 4,
                    img: './assets/images/clients/Homme-CIV.png',
                    alt: 'images',
                    quoteTextKey: 'review.items.item4.quote',
                    textKey: 'review.items.item4.text',
                    name: 'Sophie Bernard',
                    desigantionKey: 'review.items.item4.designation',
                },
            ]
        }
    }

    render() {
        const { t } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            centerMode: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: '40px',
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return (
        <section className="testimonial section-padding dark-bg " id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">{t("review.title")}</h3>
                            <p>{t("review.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonials-slides">
                            <Slider useRef="reviews" {...settings}>
                            {
                                this.state.testimonial.map((data)=> (
                                    <div className="review-item" key={data.id}>
                                        <div className="client-info">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4>{t(data.quoteTextKey)}</h4>
                                            <p>{t(data.textKey)}</p>
                                        </div>

                                        <div className="client-desc d-flex align-items-center">
                                            <div className="client-img">
                                                <img src={data.img} alt={data.alt} className="img-fluid"/>
                                            </div>
                                            <div className="client-text">
                                                <h5>{data.name}</h5>
                                                <span className="designation">{t(data.desigantionKey)}</span>
                                            </div>
                                        </div>
                                    </div> 
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default withTranslation()(Review);
