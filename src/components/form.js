import React from 'react';


export default class Form extends React.Component {
    state = {
        title: '',
        url: '',
        description: '',
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.clearForm();
    };

    clearForm(){
        this.setState({
            title: '',
            url: '',
            description: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       onChange={(event) => this.setState({
                           title: event.target.value
                       })}
                       placeholder="title"/>
                <input type="text"
                       value={this.state.description}
                       onChange={(event) => this.setState({
                           description: event.target.value
                       })}

                       placeholder="description"/>
                <input type="url"
                       value={this.state.url}
                       onChange={(event) => this.setState({
                           url: event.target.value
                       })}
                       placeholder="image url"/>
                <button type="submit">Add new item</button>
            </form>
        );
    }

}