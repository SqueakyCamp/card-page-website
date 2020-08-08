import React from 'react';
import 'tachyons';
import './Argument.css';

const Argument = (props) => {
    return (
        <a href={props.link}>
            <div className="flex flex-wrap bg-light-red db br3 pa2 ma4 grow shadow-5 idot-box">
                <h2>{props.title}</h2>
                <br></br>
                <div className="mainpara">
                    <p>{props.body}</p>
                </div>
            </div>
        </a>
    );
}

export default Argument;