var HelloMessage = React.createClass({
    render: function () {
        return React.createElement(
            "div",
            null,
            "Hello World"
        );
    }
});

ReactDOM.render(
    React.createElement(HelloMessage),
    document.getElementById('root')
);
