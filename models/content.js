const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contentSchema = new Schema (
    {
        subheading: {type: String},
        details: {type: String},
        image: [{type: String}],
        section_id: {type: Schema.Types.ObjectId, ref: "Section"}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Content", contentSchema)