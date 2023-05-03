import express from "express";
import vehicleMakeService from "./VehicleMake.service.js";

const router = express.Router();

//Create VehicleMake
router.post("/", (req, res) => vehicleMakeService.create(req, res));

//Read VehicleMake
router.get("/", (req, res) => vehicleMakeService.get(req, res));

//Read VehicleMake
router.get("/:id", (req, res) => vehicleMakeService.getOne(req, res));

//Update VehicleMake
router.patch("/:id", (req, res) => vehicleMakeService.updateOne(req, res));

//Delete VehicleMake
router.delete("/", (req, res) => vehicleMakeService.deleteOne(req, res));

export default router;
