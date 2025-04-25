import {client, main} from'./helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

const data = {
    age: 18,
    email: 'randerson@gmail.com'
}

const _id = new ObjectId('680ba29c25ccbd424a680963');
const result = await users.updateOne({_id}, {$set: data});

console.log(result);

await client.close();