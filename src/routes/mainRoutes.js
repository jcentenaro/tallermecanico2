const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", controller.index);
router.get("/about", controller.about);
router.get("/contact", controller.contact);
router.get("/service", controller.service);
router.get("/team", controller.team);


module.exports = router;