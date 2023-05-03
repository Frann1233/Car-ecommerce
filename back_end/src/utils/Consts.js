import * as dotenv from "dotenv";
dotenv.config();

const DEFAULT_PORT = process.env.PORT;
const DEFAULT_VEHICLE_SKIP = 0;
const DEFAULT_VEHICLE_TAKE = 12;
const DEFUALT_SORTNAME = false;
const DEFAULT_SORTMAKE = false;
const DEFAULT_SORTASC = true;

export {
  DEFAULT_PORT,
  DEFAULT_VEHICLE_SKIP,
  DEFAULT_VEHICLE_TAKE,
  DEFUALT_SORTNAME,
  DEFAULT_SORTMAKE,
  DEFAULT_SORTASC,
};
