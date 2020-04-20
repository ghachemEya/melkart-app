import React, { Component } from 'react';
import Menu from './compnent/Menu.js';
import avatar from './img_avatar2.png';
import './index.css';


class App extends Component {
  render() {
    let links = [
      { label: 'Accueil', link: '/'},
      { label: 'A propos', link: '/' },
      { label: 'Pôles', link: '/' },
      { label: 'Bureau', link: '/' },
      { label: 'Nouvelles idées', link: '/' },
      { label: 'Réglages', link: '/' },
    ];
    return (
        <Menu links={links} logo={avatar}/>
    );
  }
  
}

export default App;
