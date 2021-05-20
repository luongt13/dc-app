// const {getAllSections, createSection, updateSection, deleteSection} = require("../controllers/section.js")
const {Router} = require("express")
const router = Router()

router.get("/", getAllSections)
// router.get("/:id", getArticle)
router.post("/", createSection)
router.put("/:id", updateSection)
router.delete("/:id", deleteSection)

module.exports = router