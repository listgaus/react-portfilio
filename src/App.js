import React, {Component} from 'react';
import ItemsList from './components/items-list';
import DATA from './data';
import Form from './components/form';
import About from './components/about';
import Sidebar from './components/sidebar';
import './App.css';
import uuid from 'uuid/v4';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: DATA,
        page: 'portfolio'
    };
    }

    addNewItem = (itemInfo) => {
        itemInfo.id = uuid();
        this.setState(prevState => ({
            data: prevState.data.concat(itemInfo)
        }),  this.setState( () => ({
            page: 'portfolio'
        })));
    };

    onDeleteItem = (itemId) => {
        const filteredData = this.state.data.filter(item => item.id !== itemId);
        this.setState(() => ({
            data: filteredData
        }))
    };

    onNavBarClick = (path) => {
        if (path === 'about') {
            this.setState( () => ({
                page: 'about'
            }));
        }
        if (path === 'portfolio') {
            this.setState( () => ({
                page: 'portfolio'
            }));

        }
        if (path === 'add new') {
            this.setState( () => ({
            page: 'add new'
        }));
        }
    };


    render() {
        if (this.state.page === 'about') {
            return (
                <div className="App">
                    <div className="navbar">
                        <Sidebar onNavBarClick={this.onNavBarClick}/>
                    </div>
                    ) <div className="container">
                    <About/>
                </div>
                </div>
            );
        }
        if (this.state.page === 'portfolio') {
            return (
                <div className="App">
                    <div className="navbar">
                        <Sidebar onNavBarClick={this.onNavBarClick}/>
                    </div>
                    <div className="container">
                        <ItemsList onDeleteItem={this.onDeleteItem} data={this.state.data}/>
                    </div>
                </div>
            );
        }
        if (this.state.page === 'add new') {
            return (
                <div className="App">
                    <div className="navbar">
                        <Sidebar onNavBarClick={this.onNavBarClick}/>
                    </div>
                    <div className="container">
                        <Form onSubmit={this.addNewItem}/>
                    </div>
                </div>
            );
        }
    }

}


export default App;

//     return (
//         <div className="App">
//             <div className="navbar">
//                 <Sidebar/>
//             </div>
//             <div className="container">
//
//             </div>
//             <div className="container">
//                 <About/>
//             </div>
//             <div className="container">
//                 <Form onSubmit={this.addNewItem}/>
//             </div>
//             <div className="container">
//                 <ItemsList onDeleteItem={this.onDeleteItem} data={this.state.data}/>
//             </div>
//         </div>
//     );
// }