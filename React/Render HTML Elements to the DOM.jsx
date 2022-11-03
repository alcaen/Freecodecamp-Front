const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));
// So this is how it works under the hood we select wich 
// element we want to render and next to it where in the DOM we wanna render it as well