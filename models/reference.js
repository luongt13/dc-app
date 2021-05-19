const mongoose = require("mongoose")
const Schema = mongoose.Schema

const referenceSchema = new Schema (
    {
        citation: {type: String},
        article_id: {type: Schema.Types.ObjectId, ref: "Article"}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Reference", referenceSchema)