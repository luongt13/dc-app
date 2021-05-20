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