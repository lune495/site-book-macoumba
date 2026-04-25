import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: 'I remember a lazy wind whistling and buffeting my universe,my cosy place, my sweet, sweet home',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'I remember being cloistered in a makeshift abode cladded with bits of cracking pallets hanging higgledy-piggledy.',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: 'I remember a poor drowning man clutching at straws and huddling against false hopes for survival',
                },
                {
                    id: 4,
                    icon: 'fa fa-check',
                    title: 'I remember when they pelted his skinny and defenceless body with stones and thorny sticks.',
                },
            ]
        }
    }
    render() {
        return (
            <section className="banner pb-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-12 col-lg-6">
                            <div className="banner-content ">
                                <span className="subheading">Pape Macoumba DIENG </span>
                                <h1>I will always remember</h1>
                                <ul>
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {data.title}</li>
                                        ))
                                    }
                                </ul>
                                <Link to="https://a.co/d/0gvO0sBk" className="btn btn-main">Get this book</Link>  
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-img">
                                <img src="assets/images/banner/bd.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>

        );
    }
}

export default Banner;

