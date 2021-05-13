const rootElement = document.getElementById("root");
//React is used to create element 
const myFirstElement = React.createElement('li',null,'Apple')
//ReactDOM is used to render reat element
ReactDOM.render(myFirstElement, rootElement);