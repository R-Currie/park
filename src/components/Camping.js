import React from 'react';
import Background from './Background';
import Header from './Header';

const Camping = () => {
    return(
        <div>
            <Header />
            <section className='hero'>
                <Background />
                <div className="detail-content">
                    <a href="/"><i className="fa fa-times fa-2x exit"></i></a>
                    <h2>Camping in Macondo</h2>
                    <div className="detail camping-detail">
                        <div>
                            <h3>Campsites</h3>
                        </div>
                        <div className="campsite">
                            <a href='/camping/'><h4>Coronel Mountain</h4></a>
                            <img src="https://i.imgur.com/SSMDhId.jpg" alt="hiking"></img> 
                            <p>A stunning view on top of Coronel Mountain located on the northside of the lake.  The Buendia Peak trail passes right by this campsite.  Great for hikers.</p>
                            <button>Check Availability</button>
                        </div>
                        <div className="campsite">
                            <a href='/camping/'><h4>Remedios Flats</h4></a>
                            <img src="https://i.imgur.com/YMAZvSj.jpg" alt="hiking"></img> 
                            <p>42 site loop located on a flat area that overlooks Lake Macondo.  Short walking distance to the lake.</p>
                            <button>Check Availability</button>
                        </div>
                        <div className="campsite">
                            <a href='/camping/'><h4>Melquiades Forest</h4></a>
                            <img src="https://i.imgur.com/y0C9VC4.jpg" alt="hiking"></img>
                            <p>The quietest of all the campsites and a great place to birdwatch.  Provides stunning scenery when the leaves change during the turning of the seasons.</p>
                            <button>Check Availability</button>
                        </div>
                        <div className="campsite">
                            <a href='/camping/'><h4>Riohacha</h4></a>
                            <img src="https://i.imgur.com/GRyYiD9.jpg" alt="hiking"></img>
                            <p>Small 12 site loop located on the southern end of the lake.  If you wake up early enough, you may see some of the wildlife watering at the lake.</p>
                            <button>Check Availability</button> 
                        </div>
                        <div>
                            <h2 className="section-end">Campsites may close based on weather.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Camping;