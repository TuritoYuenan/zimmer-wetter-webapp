// Generated by Xata Codegen 0.29.2. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "weather_data",
    columns: [
      { name: "humidity", type: "int" },
      { name: "windDirection", type: "int" },
      { name: "temperature", type: "float" },
      { name: "pressure", type: "float" },
      { name: "windSpeedAvg", type: "float" },
      { name: "windSpeedMax", type: "float" },
      { name: "rainfall_H", type: "float" },
      { name: "rainfall_D", type: "float" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type WeatherData = InferredTypes["weather_data"];
export type WeatherDataRecord = WeatherData & XataRecord;

export type DatabaseSchema = {
  weather_data: WeatherDataRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://TuritoYuenan-1fs98q.ap-southeast-2.xata.sh/db/zimmer-wetter",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
