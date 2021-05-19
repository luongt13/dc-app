const db = require("../db/index")
const Article = require("../models/article.js")
const Section = require("../models/section.js")
const Content = require('../models/content.js')
const Reference = require("../models/reference.js")

db.on("error", console.error.bind(console, "MongoDB Connection Error"))

const main = async () => {

    await Article.deleteMany({})
    await Section.deleteMany({})
    await Content.deleteMany({})

    let article = {title: "Carbohydrates"}

    await Article.create(article)
    console.log("created article")

    let createdArticle = await Article.find({})
    let sections = [{
        heading: "Types of Carbohydrates",
        text: [],
        article_id: createdArticle[0]._id
    }]

    let reference = {citation: "google.com"}
    let createReference = await Reference.create(reference)
    await Article.findOneAndUpdate(
        {_id: createdArticle[0]._id},
        {$push: {references: createReference}}
    )
    let createSection = await Section.create(sections)
    await Article.findOneAndUpdate(
        {_id: createdArticle[0]._id},
        {$push: {section: createSection}}
    )

    let content = [
        {
            subheading: "Simple Carbohydrate", 
            details: "test content",
            image: ["/public/image.png"],

        }
    ]

    let createContent = await Content.create(content)
    await Section.findOneAndUpdate(
        {_id: createSection[0]._id},
        {$push: {text: createContent}}
    )
    console.log(await Article.find({}).populate("section").populate("text"))
}

const run = async () => {
    await main()
    db.close()
}

run()