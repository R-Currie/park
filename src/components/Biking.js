import React from 'react';
import Background from './Background';
import Header from './Header';

const Biking = () => {
    return(
        <div>
            <Header />
            <section className='hero'>
                <Background />
                <div className="detail-content">
                    <a href="/"><i className="fa fa-times fa-2x exit"></i></a>
                    <h2>Biking in Macondo National Park</h2>
                    <div className="detail biking-detail">
                        <div>
                            <a href='/biking'>Map of bike paths</a>
                        </div>
                        <img src="https://i.imgur.com/XGybQ2f.jpg" alt="biking"></img>
                        <div className="biking-text">
                            <h3>Macondo has hundreds of miles of bike paths that spread throughout and beyond the park.</h3>
                            <h3>Paths range in difficulty from leisurely rides around the lake to difficult mountain biking.</h3>
                            <h3>Wear a helmet, keep track of your surroundings, and bring a camera!</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Biking;