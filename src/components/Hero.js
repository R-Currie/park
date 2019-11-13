import React from 'react';
import Background from './Background';

const Hero = () => {
    return(
        <section className="hero">
            <Background />
            <div className="hero-content">
            <h1>Macondo National Park</h1>
            <h3>Start Your Adventure</h3>
            <div className="btns"> 
                <a href="/hiking" className="btn">
                    <div>
                        <i className="fa fa-map-o fa-3x"></i>
                    </div>
                    <div className="btn-text">Hiking</div>
                </a>
                <a href="/camping" className="btn">
                    <div>
                        <i className="fa fa-leaf fa-3x"></i>
                    </div>
                    <div className="btn-text camping">Camping</div>
                </a>
                    <a href="/boating" className="btn">
                        <div>
                            <i className="fa fa-life-buoy fa-3x"></i>
                        </div>
                        <div className="btn-text boating">Boating</div>
                    </a>
                    <a href="/biking" className="btn">
                        <div>
                            <i className="fa fa-bicycle fa-3x"></i>
                        </div>
                        <div className="btn-text">Biking</div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;