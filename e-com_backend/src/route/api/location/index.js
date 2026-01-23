const express = require("express")
const { getDivisionsController, getDistrictsController, getUpazilasController } = require("../../../controller/locationController")

const router = express.Router()

//http://localhost:4000/api/v1/location/divisions
router.get("/divisions", getDivisionsController)
//http://localhost:4000/api/v1/location/districts
router.get("/districts", getDistrictsController)
//http://localhost:4000/api/v1/location/upazilas
router.get("/upazilas", getUpazilasController)

module.exports = router