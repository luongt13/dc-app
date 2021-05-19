const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sectionSchema = new Schema(
    {
        heading: {type: String},
        text: [{type: Schema.Types.ObjectId, ref: "Content"}],
        article_id: {type: Schema.Types.ObjectId, ref: "Article"}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Section", sectionSchema)