import knex from 'knex';
import knexfile from './knexfile';
import { Model } from 'objection';

const dbSetup = () => {
  const db = knex(knexfile.development);
  Model.knex(db);
}

export default dbSetup;
