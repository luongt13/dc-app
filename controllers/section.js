const db = require("../db")
const Article = require("../models/article.js")
const Content = require("../models/content.js")
const Section = require("../models/section.js")
const Reference = require("../models/reference.js")

db.on("error", console.error.bind(console, "connection error"))

const getAllSections = async() => {
    try {

    } catch(err) {
        return res.status(500).json({error: err.message})
    }
}

module.exports = {getAllSections, createSection, updateSection, deleteSection}