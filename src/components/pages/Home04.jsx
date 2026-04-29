import React, { Component } from 'react';
import {Header, Banner, Chapter, About, Features, Feature2,
    Cta, Author,Pricing,Contact,BuyerVoices,PoemReveal,ResumeShowcase,Footer} from '../layouts/home04/index';

class Home02 extends Component {
    render() {
        return (
            <div className="dark-theme">       
                <Header />       
                        <Banner />
                        <Feature2 />
                        <About />
                        <Features />
                        <Chapter />
                        <PoemReveal />
                        <BuyerVoices />
                        <Cta />
                        {/* <Review /> */}
                        <Author />
                        <ResumeShowcase />
                        <Pricing />
                        <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home02;
