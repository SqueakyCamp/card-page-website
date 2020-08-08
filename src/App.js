import React from 'react';
import 'tachyons';
import Hero from './Hero.js';
import ArgumentList from './ArgumentList';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hero title="The SHOCKING truth about Bill Gates (FACTS only!)"/>
                <ArgumentList/>
            </div>
        );
    }
}

export default App;