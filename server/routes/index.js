const router = require("express").Router();
const EventController = require("../controllers/event.controller");

router.get("/event", EventController.showEvent);
router.post("/event", EventController.addAplikasi);

module.exports = router;
