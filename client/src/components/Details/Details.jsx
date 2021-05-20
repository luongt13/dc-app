import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {getArticle} from "../../services/article"
import Section from "../Section/Section.jsx"

export default function Details(s) {
    const [article, setArticle] = useState({})
    let {id} = useParams()
    useEffect(() => {
        fetch()
    }, [id])
    
    async function fetch() {
        let res = await getArticle(id)
        setArticle(res)
        console.log(res)
    }

    return (
        <div>
            {article ? <h4>{article.title}</h4> : null}
            <Section section={article.section}/>
        </div>
    )
}
