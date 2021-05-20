const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema (
    {
    //     title: {type: String, required: true},
    //     section: [{type: Schema.Types.ObjectId, ref: "Section"}],
    //     references: [{type: Schema.Types.ObjectId, ref: "Reference"}]
    title: {type: String, required: true},
    section: [{ 
        image: {type: String},
        name: {type: String},
        content: [{
                name: {type: String},
                image: [{type: String}], 
                detail: {type: String}
            }] 
    }],
    citation: [{type: String}]
    },
    {timestamps: true}

)
articleSchema.index({name: 'text', 'content.detail': 'text'})
module.exports = mongoose.model("Article", articleSchema)