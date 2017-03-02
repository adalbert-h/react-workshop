// @flow

import React from 'react';
import ReactDOM from 'react-dom';

const getGreeting = (): number => {
    return "Hello World"
};

class HelloMessage extends React.Component {
    render() {
        return (
            <div>{getGreeting()}</div>
        );
    }
}

ReactDOM.render(
    React.createElement(HelloMessage),
    document.getElementById('root')
);
