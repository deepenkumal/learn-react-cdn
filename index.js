const rootElement = document.getElementById("root");
//React is used to create element 

 let fruitName = 'Grapes';
const myJSXElement = (
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>{fruitName.toUpperCase()}</li>
    </ul>
)
//ReactDOM is used to render reat element
ReactDOM.render(myJSXElement, rootElement);