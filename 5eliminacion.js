import { client, main } from './helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

const __id = new ObjectId('680ba29c25ccbd424a680963');
const restult = await users.deleteOne({ _id });

console.log(restult)

await client.close();