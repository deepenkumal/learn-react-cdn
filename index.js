const rootElement = document.getElementById("root");
//React is used to create element 
const myFirstElement = React.createElement('ul',null,
[
React.createElement('li',null,Apple),
React.createElement('li',null,Banana),

]);
//ReactDOM is used to render reat element
ReactDOM.render(myFirstElement, rootElement);