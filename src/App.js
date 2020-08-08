import React from 'react';
import 'tachyons';
import Hero from './Hero.js';
import ArgumentList from './ArgumentList';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hero title="Lorem Ipsum Dolore"/>
                <ArgumentList/>
            </div>
        );
    }
}

export default App;