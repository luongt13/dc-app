import React from 'react'
import {Link} from "react-router-dom"

export default function List(props) {
    return (
        <div>
        {props.articles && props.articles.map((article) => {
            return (
            <div>
                <Link to={`/details/${article._id}`}>
                    <h1>{article.title}</h1>
                </Link>
            </div>



            )
    })}
        </div>
    )
}
