class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: new Date().toLocaleString()
        };
    }

    tick() {
        this.setState(() => {
            return ({
                data: new Date().toLocaleString()
            });
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <h1 className="orange">
                Hello World from React {this.state.data}
            </h1>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
);