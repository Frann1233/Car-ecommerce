import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { DEFAULT_PORT } from "./utils/Consts.js";
import vehicleMakeRoute from "./modules/vehicle-make/VehicleMake.controller.js";
import vehicleModelRoute from "./modules/vehicle-model/VehicleModel.controller.js";
import cors from "cors";

export const prisma = new PrismaClient();

const server = express();

server.use(bodyParser.json());
server.use(
  cors({
    origin: "http://localhost:3000",

  })
);
server.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'max-age=60');
  next();
});

server.use("/vehicle-make", vehicleMakeRoute);
server.use("/vehicle-model", vehicleModelRoute);
server.use("/uploads", express.static('./src/uploads'))

server.listen(DEFAULT_PORT, () => {
  console.log(`Listening to port ${DEFAULT_PORT}`);
});
