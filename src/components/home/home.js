import React, { Component } from 'react';
import './home.scss';
import Articles from '../articles/articles';

class HomeComponent extends Component {
    render () {
        const {articles} = this.props;
        return (
            <div className="home-container">
                <div className="home-tit-container">
                    <h2 className="home-tit">코로나 코어 정보 및 필요한 자료</h2>
                    <div className="home-tit-logo">
                        <img src="image/Coronvirus2-CDC.jpg" className="res-img"/>
                    </div>
                </div>
                <div className="home-main-container">
                    <Articles articles={articles} />
                </div>
            </div>
        )
    }
}

export default HomeComponent;