import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = ['Eshimuli', 'Elukongo', 'Emuhaya', 'Ebunangwe'];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return (
    <div>
        <ListGroup items={items} heading='cities' onSelectItem={handleSelectItem}/>
    </div>
);
}

export default App;