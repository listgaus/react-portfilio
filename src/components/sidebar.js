import React from 'react';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.onNavBarClick = this.onNavBarClick.bind(this);
    }

    onNavBarClick(event) {
        const val = event.target.innerHTML.toLowerCase();
        console.log(event.target.innerHTML.toLowerCase());
        this.props.onNavBarClick(val);
    }

    render() {
        return (
            <div className="sidebar">
                <img className="sidebar-img"
                     src="https://image.flaticon.com/icons/png/512/247/247837.png"/>
                <div className="line-trough">How to become a billionaire</div>
                <div className="nav-btn" onClick={this.onNavBarClick}>About</div>
                <div className="nav-btn" onClick={this.onNavBarClick}>Portfolio</div>
                <div className="nav-btn" onClick={this.onNavBarClick}>Add new</div>
                <div className="row">
                    <i className="fa fa-github" onClick={() => window.open("https://github.com/", "_blank")}/>
                    <i className="fa fa-facebook" onClick={() => window.open("https://www.facebook.com/", "_blank")}/>
                    <i className="fa fa-linkedin" onClick={() => window.open("https://www.linkedin.com/", "_blank")}/>
                    <i className="fa fa-apple"
                       onClick={() => window.open("https://www.apple.com/il/apple-watch-series-4/")}/>
                </div>
            </div>
        )
    }
}

