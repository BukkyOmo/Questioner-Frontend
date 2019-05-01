import React, { Component } from 'react';
import './index.scss';
import buks from './assets/images/Buks.jpg';

const Header = <h1>Welcome to Questioner</h1>
const Image = <img src={buks} alt="babe"></img>

class App extends Component{
    render(){
        return <div>
            {Header}
            {Image}
        </div>
    }
}

export default App;
