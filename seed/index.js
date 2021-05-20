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

    let article = [{
        title: "Carbohydrates",
        section: [{
            image: "/images/image.png",
            name: "Types of Carbohydrates",
            content: [{
                name: "Complex Carbohydrates",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }, 
            {
                name: "Simple Carbohydrates",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ] 
        }],
        references: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ]
    },
    {
        title: "Fats",
        section: [{
            image: "/images/image.png",
            name: "Types of Fats",
            content: [{
                name: "Unhealthy Fats",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Healthy Fats",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ] 
        }],
        references: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ]
    },
    {
        title: "Protein",
        section: [{
            image: "/images/image.png",
            name: "Types of Proteins",
            content: [{
                name: "Animal Protein",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Plant Protein",
                image: "/images/image.png", 
                detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ] 
        }],
        citation: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ]
    }
]
    
    // let article = {title: "Carbohydrates"}

    await Article.insertMany(article)
    console.log("created article")

    // let createdArticle = await Article.find({})
    // let sections = [{
    //     heading: "Types of Carbohydrates",
    //     text: [],
    //     article_id: createdArticle[0]._id
    // }]

    // let reference = {citation: "google.com"}
    // let createReference = await Reference.create(reference)
    // await Article.findOneAndUpdate(
    //     {_id: createdArticle[0]._id},
    //     {$push: {references: createReference}}
    // )
    // let createSection = await Section.create(sections)
    // await Article.findOneAndUpdate(
    //     {_id: createdArticle[0]._id},
    //     {$push: {section: createSection}}
    // )

    // let content = [
    //     {
    //         subheading: "Simple Carbohydrate", 
    //         details: "test content",
    //         image: ["/public/image.png"],

    //     }
    // ]

    // let createContent = await Content.create(content)
    // await Section.findOneAndUpdate(
    //     {_id: createSection[0]._id},
    //     {$push: {text: createContent}}
    // )
    // console.log(await Article.find({}).populate("section").populate("text"))
    console.log(await Article.find({}))

}

const run = async () => {
    await main()
    db.close()
}

run()