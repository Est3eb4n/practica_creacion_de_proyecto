import {client, main} from'./helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');


let result = await users.find().toArray();
console.log(result);


const _id = new ObjectId('680b83859391967a0cd7462f');
result = await users.findOne({_id});
console.log(result)
