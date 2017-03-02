class HelloMessage extends React.Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

ReactDOM.render(
    React.createElement(HelloMessage),
    document.getElementById('root')
);
