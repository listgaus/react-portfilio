import React from 'react';
import Item from './single-item';


function ItemsList(props) {
    return (
        <div className="items-list">
            {props.data.map( (item) => <Item onDeleteItem={props.onDeleteItem} key={item.id} {...item} /> )}
        </div>
    );
}


export default ItemsList;