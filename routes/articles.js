const {getAllArticles, getArticle, createArticle, updateArticle, deleteArticle, searchArticle} = require("../controllers/articles.js")
const {Router} = require("express")
const router = Router()

router.get("/", getAllArticles)
router.get("/:id", getArticle)
router.post("/", createArticle)
router.put("/:id", updateArticle)
router.delete("/:id", deleteArticle)
router.put("/", searchArticle)

module.exports = router