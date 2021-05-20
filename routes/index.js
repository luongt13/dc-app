const {Router} = require("express")
const articleRouter = require("./articles.js")
// const sectionRouter = require("./section.js")
const router = Router()

router.use("/articles", articleRouter)
// router.use("/section", sectionRouter)

module.exports = router