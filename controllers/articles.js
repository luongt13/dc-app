const db = require("../db")
const Article = require("../models/article.js")
const Content = require("../models/content.js")
const Section = require("../models/section.js")
const Reference = require("../models/reference.js")

db.on("error", console.error.bind(console, "connection error"))

const getAllArticles = async (req,res) => {
    try {
        const getAllArticles = await Article.find({})
        console.log(getAllArticles)
        return res.status(200).json(getAllArticles)

    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const getArticle = async (req,res) => {
    try {
        const article = await Article.findById(req.params.id).populate([
        {
            path: "section",
            model: "Section",
            populate: {path: "text", model: "Content"} 
        },
        {
            path: "references",
            model: "Reference"
        }
    ])
        if(article) {
            return res.status(200).json(article)
        } else {
            return res.status(404).send("article does not exist")
        }

    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const createArticle = async (req, res) => {
    try {
        let {title} = req.body
        console.log(title)
        let newArticle = {
            title
        }
console.log(newArticle)
        await Article.create(newArticle)

        return res.status(201).json(newArticle)

    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

const updateArticle = async (req,res) => {
    try {
        let article = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (article) {
            return res.status(200).json(article)
        } else {
            return res.status(404).send("article not found")
        }
    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

// const deleteArticle = async () => {
    
// }

module.exports = {getAllArticles, getArticle, createArticle, updateArticle}
// , deleteArticle