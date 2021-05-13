const rootElement = document.getElementById("root");
//React is used to create element 

//react component is a function which returns JSXElement ,element
const App = () => {
    const fruitName = 'Grapes';
    return (
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>{fruitName.toUpperCase()}</li>
        </ul>
    );
}

//ReactDOM is used to render reat element
//component tag <App />
ReactDOM.render(<App/>, rootElement);