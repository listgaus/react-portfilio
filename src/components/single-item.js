import React from 'react';
import 'font-awesome/css/font-awesome.min.css'

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }


    onDeleteItem() {
        this.props.onDeleteItem(this.props.id);
    };


    render() {
        return (
            <div className="single-item">
                <img className="item-img" src={this.props.url}/>
                <div className="info">
                    <div className="title">{this.props.title}</div>
                    <div className="description">{this.props.description}</div>
                </div>
                <div><i onClick={this.onDeleteItem} className="fa fa-trash-o"/></div>
            </div>
        );
    }
}


