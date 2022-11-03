class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
}
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
// Change code below this line

// To use react dom we add the component and where we wanna render that component
// In this case we get the element with the id of challenge node.
