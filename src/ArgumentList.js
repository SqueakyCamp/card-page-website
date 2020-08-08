import React from 'react';
import 'tachyons';
import Argument from './Argument';
import './ArgumentList.css';
import Arguments from './Arguments.json';

const ArgumentList = () => {
    return (
        <div className="argument-list">
            {
                Arguments.map((things, i) => {
                    return (
                        <Argument link={Arguments[i].link} title={Arguments[i].title} body={Arguments[i].body}/>
                    );
                })
            }
        </div>
    );
}

export default ArgumentList;