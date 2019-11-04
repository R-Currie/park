import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css'
import Landing from './Landing';
import Hiking from './Hiking';
import Camping from './Camping';

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Landing} />
                <Route path="/hiking" component={Hiking} />
                <Route path="/camping" component={Camping} />
            </BrowserRouter>
        </div>
    )
}

export default App;