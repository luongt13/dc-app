import './App.css';
import {useState, useEffect} from "react"
import {Route} from "react-router-dom"
import {getAllArticles} from "./services/article.js"
import Nav from "./components/Nav/Nav.jsx"
import List from "./components/List/List.jsx"
import Details from "./components/Details/Details.jsx"

function App() {
  let [articles, setArticles] = useState([])

  useEffect(() => {
    fetch()
    return () => {
    }
  }, [])

  async function fetch() {
    let res = await getAllArticles() 
    setArticles(res)
  }
  console.log(articles)
  return (
    <div className="App">
        <Nav articles={articles}/>
        <Route exact path="/">
          <List articles={articles}/>
        </Route>
        <Route path="/details/:id">
          <Details/>
        </Route>
    </div>
  );
}

export default App;
