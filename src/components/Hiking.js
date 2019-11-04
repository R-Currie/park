import React from 'react';
import Background from './Background';
import Header from './Header';

const Hiking = () => {
    return(
        <div>
            <Header />
            <section className='hero'>
                <Background />
                <div className="detail-content">
                    <a href="/"><i className="fa fa-times fa-2x exit"></i></a>
                    <h2>Hiking in Macondo</h2>
                    <div className="detail">
                        <div className="hiking-detail">
                            <h3>Trail maps</h3>
                            <a href="/hiking">Lake Macondo</a>
                            <a href="/hiking">Arcadio Highlands</a>
                            <a href="/hiking">Buendia Peak</a>
                            <a href="/hiking">Arboles Verdes</a>
                        </div>
                        <img src="https://i.imgur.com/386NQ78.jpg" alt="hiking"></img>
                        <div className="hiking-flex">
                            <div>
                                <h3>What to bring:</h3>
                                <li>Sturdy footwear</li>
                                <li>Plenty of water</li>
                                <li>Mosquito and bug repellant</li>
                                <li>Sunscreen and a hat</li>
                                <li>Rain gear and layers. Check weather ahead of time</li>
                                <li>Snacks for longer hikes</li>
                            </div>
                            <div className="thoughtful-hiker">
                                <h3>Ways to be a thoughtful hiker:</h3>
                                <li>Do not count on having cell service if you need help.</li>
                                <li>Familiarize yourself with hazards so you will have fun and stay safe.</li>
                                <li>Stop at a visitor center, ranger station, or check the website for trail and weather conditions before you go.</li>
                                <li>Do not let members of your group get ahead or behind.</li>
                            </div>
                        </div>
                        <div>
                            <h2 className="section-end">Have fun and stay safe!</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hiking;