import { client, main } from './helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

const __id = new ObjectId('680b83859391967a0cd7462f');
const restult = await users.deleteOne({ _id });

console.log(restult)

await client.close();