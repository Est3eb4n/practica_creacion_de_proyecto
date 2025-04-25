import {client, main} from'./helpers/db.js';

const db = await main();

const users = db.collection('users');

const data = {
    firstName: 'Ramsey',
    lastName: 'Anderson',
    age:20,
    geneder: 'M',
    email: 'randerson@.mail.com'
}


const result = await users.insertOne(data);

console.log(result);//ola

await client.close();