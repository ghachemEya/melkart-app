import React, { Component } from 'react';
import logout from './logout.png';
import './Menu.css';


export default class Menu extends Component {
 
    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = <a href={link.link}>{link.label}</a>;
            return (
                <li key={index}>
                    {linkMarkup}
                </li>
            );
        });
    
        return (
            
            
             <div className="wrapper">
                    <div className="sidebar">
                    <div className="box">
                        <img src={this.props.logo} alt="avatar"/>
                        <span className="span-name"> Foulen ben Foulen </span>
                    </div>
                    <ul>
                        {linksMarkup}
                    </ul>
                    <div>
                        <div className="box-logout">
                            <img className="img_logout" src={logout} alt="logout"/>
                            <span className="span-logout"> Se déconnecter </span>
                        </div>
                    </div>
                </div>
             </div> 
        );  
    }
}






  