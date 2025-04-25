import {client, main} from'./helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');


let result = await users.find().toArray();
console.log(result);


const _id = new ObjectId('680ba29c25ccbd424a680963');
result = await users.findOne({_id});
console.log(result)

// limit:limita el numero de documentos que se recuperan en una consulta
const limitResult = await collection.find({}).limit(3).toArray()

// skip: omite un numero especificado de documentos al inicio de una consulta
const skipResult = await collection.find({}).skip().toArray()

// ejemplo de paginacion usando limit y skip

page = 1;
pageSize = 2;
paginatedResult = await users.find({}).skip((page - 1)*pageSize).limit(pageSize).toArray();

client.close();