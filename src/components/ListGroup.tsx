import { useState } from "react";

function ListGroup() {
    const items = ['Eshimuli', 'Elukongo', 'Emuhaya', 'Ebunangwe'];
    const [selectedItemIndex, setselectedItemIndex] = useState(-1);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={ selectedItemIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={ () => {setselectedItemIndex(index); }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
