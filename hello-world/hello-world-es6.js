class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello World"
        );
    }
}

ReactDOM.render(
    React.createElement(HelloMessage),
    document.getElementById('root')
);
