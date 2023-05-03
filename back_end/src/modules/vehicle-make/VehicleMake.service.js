import { prisma } from "../../main.js";
import {
  DEFAULT_VEHICLE_SKIP,
  DEFAULT_VEHICLE_TAKE,
} from "../../utils/Consts.js";

const create = async (req, res) => {
  const name = req.body.name;
  const abrv = req.body.abrv;

  const vehicleMake = await prisma.vehicleMake.create({
    data: {
      name,
      abrv,
    },
  });
  res.send(vehicleMake);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const specifiedVehicleMake = await prisma.vehicleMake.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  res.send(specifiedVehicleMake);
};

const get = async (req, res) => {
  const skip = req.query.skip ?? DEFAULT_VEHICLE_SKIP;
  const take = req.query.take ?? DEFAULT_VEHICLE_TAKE;
  const filterName = req.query.filterName;
  const filterAbrv = req.query.filterAbrv;
  const vehicleMakes = await prisma.vehicleMake.findMany({
    skip: parseInt(skip),
    take: parseInt(take),
    where: {
      AND: [
        {
          name: {
            contains: filterName,
          },
        },
        {
          abrv: {
            contains: filterAbrv,
          },
        },
      ],
    },
  });
  const count = await prisma.vehicleMake.count({});
  const response = {
    data: [...vehicleMakes],
    count
  }
  res.send(response);
};

const deleteOne = async (req, res) => {
  const id = req.body.id;
  const vehicleMakeDeleted = await prisma.vehicleMake.delete({
    where: {
      id,
    },
  });
  res.send(vehicleMakeDeleted);
};

const updateOne = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const abrv = req.body.abrv;
  const vehicleMakeUpdate = await prisma.vehicleMake.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      abrv,
    },
  });
  res.send(vehicleMakeUpdate);
};

export default { create, get, getOne, deleteOne, updateOne };
