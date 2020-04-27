import React, { Component } from 'react';
import './articles.scss';

class Articles extends Component {
    render () {
        const { articles} = this.props;
        console.log(articles);
        const articles_tags = articles.map(({id, link, title}, index) => (
            <div key={index} className="article-container">
                <a target="_blank" href={link}>{title}</a>
            </div>
        ))
        return (
                <div className="articles-container">
                    <h3>Articles</h3>
                    {articles_tags}
                </div>
        )
    }
}

export default Articles;