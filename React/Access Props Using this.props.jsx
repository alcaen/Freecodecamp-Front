class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name={"Alcaen"} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* If the component is class instead of stelless function we use the this keyword to access to their props */}
        {/* Change code above this line */}
      </div>
    );
  }
}
