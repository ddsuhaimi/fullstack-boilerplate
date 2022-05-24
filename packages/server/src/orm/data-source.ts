import "reflect-metadata"
import { DataSource } from "typeorm"
import * as path from "path";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "blog_server",
    synchronize: true,
    logging: false,

    // entities: [User],
    entities: [path.join(__dirname, './entity/**/*.ts')],
    migrations: [],
    subscribers: [],
})
