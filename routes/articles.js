const {getAllArticles, getArticle, createArticle} = require("../controllers/articles.js")
const {Router} = require("express")
const router = Router()

router.get("/", getAllArticles)
router.get("/:id", getArticle)
router.post("/", createArticle)
// router.delete("/:id", deleteArticle)
// router.put("/:id", updateArticle)
//  , deleteArticle, updateArticle

module.exports = router