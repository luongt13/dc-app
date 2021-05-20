import api from "./apiConfig"

export const getAllArticles = async () => {
    try {
        const res = await api.get("/articles")
        return res.data
    } catch(err){
        throw err
    }
}

export const getArticle = async (id) => {
    try {
        const res = await api.get(`/articles/${id}`)
        return res.data
    } catch(err) {
        throw err
    }
}

export const searchArticle = async(req,res) => {
    console.log(req)
    try {
        const res = await api.put("/articles", {search: req})
        return res.data
    } catch(err) {
        throw err
    }
}