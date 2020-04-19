import React, { Component } from 'react';
import './articles.scss';

class Articles extends Component {
    render () {
        const articles_data = [
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
            { link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
        ];
        const articles = articles_data.map(({id, link, title}, index) => (
            <div key={index} className="article-container">
                <a target="_blank" href={link}>{title}</a>
            </div>
        ))
        return (
                <div className="articles-container">
                    <h3>기사들</h3>
                    {articles}
                </div>
        )
    }
}

export default Articles;