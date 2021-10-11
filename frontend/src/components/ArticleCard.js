import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleCard = (props) => {
    const article  = props.article;

    return(
        <div className="card-container">
            <img src="https://www.avtlens.com/wp-content/uploads/2018/10/type-article.png" alt="" class="center"/>
            <div className="desc">
                <h2>
                    <Link to={`/show-article/${article._id}`}>
                        { article.title }
                    </Link>
                </h2>
                <h3>{article.authors}</h3>
                <p>{article.SE_method}</p>
                <p></p>
            </div>
        </div>
    )
};

export default ArticleCard;