import { useState } from "react";

// {items :[], heading: string}
interface props {
    items: string[];
    heading: string;
    // (item : string) => void
    onSelectItem: (item: string) => void;
}


function ListGroup({items, heading, onSelectItem }: props) {
    const [selectedItemIndex, setselectedItemIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={ selectedItemIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={ () => {setselectedItemIndex(index);
                        onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
