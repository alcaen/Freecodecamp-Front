const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// Change code below this line

ShoppingCart.defaultProps = { items: 0 };

// In this way we can specify the default props them will be overided if props are specified
// Otherwise the component will take this default value.

const Camper = (props) => {
  return (
    <div>
      <h1>Props Example</h1>
      <p>{props.name}</p>
      {/* Cause this is a stateless funtion we dont have to use this */}
    </div>
  );
};
Camper.propTypes = { name: PropTypes.string.isRequired };
// There we set the name to an string an made it required

Camper.defaultProps = { name: "CamperBot" };
// We set the default value of name as CamperBot
