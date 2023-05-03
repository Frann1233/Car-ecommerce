import express from "express";
import vehicleModelService from "./VehicleModel.service.js";
import multer from "multer";

const multerStorage = multer.memoryStorage();
const multerUpload = multer({ storage: multerStorage });

const router = express.Router();

//Create VehicleModel
router.post("/", multerUpload.single("image"), (req, res) => vehicleModelService.create(req, res));

//Read VehicleModel
router.get("/", (req, res) => vehicleModelService.get(req, res));

//Read VehicleModel
router.get("/:id", (req, res) => vehicleModelService.getOne(req, res));

//Update VehicleModel
router.patch("/:id", multerUpload.single("image"), (req, res) => vehicleModelService.updateOne(req, res));

//Delete VehicleModel
router.delete("/", (req, res) => vehicleModelService.deleteOne(req, res));

export default router;
