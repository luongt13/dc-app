const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema (
    {
        title: {type: String, required: true},
        section: [{type: Schema.Types.ObjectId, ref: "Section"}],
        references: [{type: Schema.Types.ObjectId, ref: "Reference"}]
    },
    {timestamps: true}
)

module.exports = mongoose.model("Article", articleSchema)