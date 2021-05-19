const {Router} = require("express")
const articleRouter = require("./articles.js")
const router = Router()

router.use("/articles", articleRouter)

module.exports = router