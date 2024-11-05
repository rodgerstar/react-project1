import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = ['Eshimuli', 'Elukongo', 'Emuhaya', 'Ebunangwe'];

    return (
    <div>
        <ListGroup items={items} heading='cities'/>
    </div>
);
}

export default App;