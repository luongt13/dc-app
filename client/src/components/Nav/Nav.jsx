import React from 'react'
import {Link} from "react-router-dom"
export default function Nav(props) {
    console.log(props.articles)
    return (
        <div>
            <Link to="/">Home</Link>
            {props.articles && props.articles.map((article) => {
                return (
                    <div>
                        <Link to={`/details/${article._id}`}>{article.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}
