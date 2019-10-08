import * as Knex from "knex";

export function getConnection(){
    return Knex({
        client: 'pg',
        connection: 'postgres://postgres:password1@localhost:5432/postgres',
        searchPath: ['knex', 'public'],
    });
}
