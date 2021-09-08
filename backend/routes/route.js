const express = require("express");
const router = express.Router();
const registerController = require("../controller/contoller");

//buyer Routes
router.get("/form", registerController.readReg);
router.post("/form", registerController.addReg);
router.put("/form/:id", registerController.updateReg);
router.delete("/form/:id", registerController.deleteReg);


router.get("/form", registerController.readReg);
router.post("/form", registerController.addReg);
router.put("/form/:id", registerController.updateReg);
router.delete("/form/:id", registerController.deleteReg);

module.exports = router;