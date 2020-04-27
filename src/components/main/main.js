import React, { Component } from 'react';
import './main.scss';
import HomeComponent from '../home/home';

class MainComponent extends Component {
    render() {
        const { articles } = this.props;
        return (
            <HomeComponent articles={articles}></HomeComponent>
        )
    }
}

export default MainComponent;