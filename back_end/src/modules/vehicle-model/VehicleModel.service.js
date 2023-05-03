import { prisma } from "../../main.js";
import {
  DEFAULT_VEHICLE_SKIP,
  DEFAULT_VEHICLE_TAKE,
  DEFUALT_SORTNAME,
  DEFAULT_SORTMAKE,
  DEFAULT_SORTASC,
} from "../../utils/Consts.js";


const create = async (req, res) => {
  const name = req.body.name;
  const abrv = req.body.abrv;
  const image = req.file;
  const makeId = req.body.makeId;

  const base64Image = Buffer.from(image.buffer, 'binary').toString('base64');
  const base64ImageStr = `data:${image.mimetype};base64,${base64Image}`;
  const vehicleModel = await prisma.vehicleModel.create({
    data: {
      name,
      abrv,
      image: base64ImageStr,
      make: {
        connect: {
          id: parseInt(makeId),
        },
      },
    },
  });

  res.send(vehicleModel);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const specifiedOne = await prisma.vehicleModel.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(specifiedOne);
};

const get = async (req, res) => {
  const skip = req.query.skip ?? DEFAULT_VEHICLE_SKIP;
  const take = req.query.take ?? DEFAULT_VEHICLE_TAKE;
  const filterName = req.query.filterName ?? undefined;
  const filterMakeId = req.query.filterMakeId ?? undefined;
  const filterAbrv = req.query.filterAbrv ?? undefined;
  const sortName = req.query.sortName ?? DEFUALT_SORTNAME;
  const sortMake = req.query.sortMake ?? DEFAULT_SORTMAKE;
  const sortASC = req.query.sortASC ?? DEFAULT_SORTASC;

  let orderBy = {};
  if (sortName === false && sortMake === true) {
    orderBy.make = sortMake ? (sortASC == "true" ? "asc" : "desc") : undefined
  } else if (sortName === true && sortMake === false) {
    orderBy.name = sortName ? (sortASC == "true" ? "asc" : "desc") : undefined
  } else {
    orderBy.name = sortName ? (sortASC == "true" ? "asc" : "desc") : undefined
  }

  const vehicleModels = await prisma.vehicleModel.findMany({
    skip: parseInt(skip),
    take: parseInt(take),
    orderBy,
    where: {
      AND: [
        {
          name: {
            contains: filterName,
          },
        },
        {
          makeId: filterMakeId ? parseInt(filterMakeId) : undefined,
        },
        {
          abrv: {
            contains: filterAbrv,
          },
        },
      ],
    },
  });

  const vehicleModelCount = await prisma.vehicleModel.count();
  const result = {
    data: vehicleModels,
    count: vehicleModelCount
  }
  res.send(result);
};

const deleteOne = async (req, res) => {
  const id = req.body.id;
  const vehicleModelDelete = await prisma.vehicleModel.delete({
    where: {
      id,
    },
  });
  res.send(vehicleModelDelete);
};

const updateOne = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const abrv = req.body.abrv;
  const makeId = req.body.makeId;
  const image = req.file;

  const base64Image = Buffer.from(image.buffer, 'binary').toString('base64');
  const base64ImageStr = `data:${image.mimetype};base64,${base64Image}`;

  const vehicleModelUpdate = await prisma.vehicleModel.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      abrv,
      image: base64ImageStr,
      makeId: parseInt(makeId)
    },
  });
  res.send(vehicleModelUpdate);
};

export default { create, get, getOne, deleteOne, updateOne };
