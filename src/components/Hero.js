import React from 'react';
import Background from './Background';

const Hero = () => {
    return(
        <section class="hero">
            <Background />
            <div class="hero-content">
            <h1>Macondo National Park</h1>
            <h3>Start Your Adventure</h3>
            <div class="btns"> 
                <a href="/hiking" className="btn">
                    <div>
                        <i class="fa fa-map-o fa-3x"></i>
                    </div>
                    <div class="btn-text">Hiking</div>
                </a>
                <a href="/camping" class="btn">
                    <div>
                        <i class="fa fa-leaf fa-3x"></i>
                    </div>
                    <div class="btn-text camping">Camping</div>
                </a>
                    <a href="/boating" class="btn">
                        <div>
                            <i class="fa fa-life-buoy fa-3x"></i>
                        </div>
                        <div class="btn-text boating">Boating</div>
                    </a>
                    <a href="/biking" class="btn">
                        <div>
                            <i class="fa fa-bicycle fa-3x"></i>
                        </div>
                        <div class="btn-text">Biking</div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;