const Router = require("express")
const router = new Router()
const picController = require('../Controllers/picsController')

router.get('/',picController.sendPic)

module.exports = router