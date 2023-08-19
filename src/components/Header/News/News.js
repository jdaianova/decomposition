//выводит блок новостей

import './News.css';

function News({ newsCategoriesList, newsList }) {

    return (
        <div className="News">

            <div className="News-categories">
                {newsCategoriesList.map((item, i) => {
                    return <div className="News-categories-title" key={i}>{item}</div>
                })}
                <div className="News-date">
                    {new Date().toString()}
                </div>
            </div>

            <div className="News-content">
                {newsList.map((item, i) => {
                    return <div className="News-content-title" key={i}>{item}</div>
                })}
            </div>

        </div>
    );
}

export default News;