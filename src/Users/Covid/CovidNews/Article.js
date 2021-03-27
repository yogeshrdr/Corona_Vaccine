import React from 'react';

const Article = (props) => {
    const { details } = props;
    return (
      <div className="p-6 border-solid border-4">
            <img  src={details.urlToImage} alt="NewsImage" />
            <div className="mt-4">
                <h6 >
                <a href={details.url} target="_blank">
                {details.title}
                </a>
                </h6>
                <p >{details.description}</p>
            </div>
       
      </div>
    )
}

export default Article;