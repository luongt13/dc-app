import {useState} from 'react'
import {Link} from "react-router-dom"
import Search from "../Search/Search.jsx"

export default function List(props) {
    const [filteredArticles, setFilteredArticles] = useState(null) 
    const [searchTerm, setSearchTerm] = useState(null)
    console.log(filteredArticles)
    return (
        <div>
            <Search searchTerm={searchTerm} setFilteredArticles={setFilteredArticles} setSearchTerm={setSearchTerm}/>
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
