import React from 'react'
import {searchArticle} from "../../services/article"

export default function Search(props) {
    let {setFilteredArticles} = props

    async function handleSearch(value) {
        let res = await searchArticle(value)
        console.log(value)
        setFilteredArticles(res)
    }
    //sets the search tern and calls the handle search as the input changes
    function handleChange(e) {
        props.setSearchTerm(e.target.value)
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleSearch(props.searchTerm)
    }

    return (
    <form className="search-input" onSubmit={handleSubmit}>
        <input type='text' name='search' id='search' placeholder='Search' value={props.searchTerm} onChange={handleChange}/>
        <button type="submit">Search</button>
    </form>
    )
}
