import {client, main} from'./helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

const data = {
    age: 18,
    email: 'randerson@gmail.com'
}

const _id = new ObjectId('680b83859391967a0cd7462f');
const result = await users.updateOne({_id}, {$set: data});

console.log(result);

await client.close();