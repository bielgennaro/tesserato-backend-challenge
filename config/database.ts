/* eslint-disable prettier/prettier */
/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg 
    |
    */
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('DB_HOST', 'dev-tesserato') as string,
        port: Number(Env.get('DB_PORT', 5433)),
        user: Env.get('DB_USER', 'postgres') as string,
        password: Env.get('DB_PASSWORD', '99831') as string,
        database: Env.get('DB_NAME', 'mydatabase') as string,
      },
      healthCheck: true,
      debug: false,
    },
  },
}

export default databaseConfig
