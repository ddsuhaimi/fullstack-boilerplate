import {createConnection, getConnectionOptions, ConnectionOptions} from "typeorm";
// import {dbCreateConnection} from './typeorm/dbCreateConnection'
// import config from './typeorm/config/ormconfig'
import './orm'
// import logger from './shared/Logger';

export async function intializeDB(): Promise<void> {
//   const conn = await dbCreateConnection()
//   if (coiwn) {
    if (true) {
        console.log("database connection success")
  }

  // console.log("config", config)
  // const connection = await createConnection({
  //   type: 'postgres',
  //   host: "localhost",
  //   port: 5432,
  //   username: "postgres",
  //   password: "root",
  //   database: "blog_server",
  //   logging: false,
  //   synchronize: true,
  //   entities: ['src/typeorm/entities/**/*.{.ts,.js}'],
  //   migrations: ['src/typeorm/migrations/**/*.ts'],
  //   subscribers: ['src/typeorm/subscriber/**/*.ts'],
  //   cli: {
  //     entitiesDir: 'src/typeorm/entities/',
  //     migrationsDir: 'src/typeorm/migrations',
  //     subscribersDir: 'src/typeorm/subscriber',}
  //   })
  // const options = await getConnectionOptions()
  // console.log("options", options)
//   logger.info('Database successfully initialized');
}