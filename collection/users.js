import { client, main } from './../helpers/db.js';

const db = await main();

await db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'objectId',
            required: ['firstName', 'lastName', 'age', 'gender', 'email'],
            properties: {
                firstName: {
                    bsonType: 'string',
                    description: 'Ingrese su nombre.'
                },
                lastName: {
                    bsonType: 'string',
                    description: 'Ingrese su apellido.'
                },
                age: {
                    bsonType: "numbre",
                    minimum: 18,
                    maximum: 100,
                },
                geneder: {
                    bsonType: "string"
                },
                email: {
                    bsonType: 'string',
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                hobbies: {
                    bsonType: 'aray',
                    description: 'ingrese un hobbi valido',
                    items: {
                        bsonType: 'string',
                        enum: ['Music', 'Football', 'Dancing', 'Haking', 'Reading'],
                        description: 'ingrese alguno de estos hobbies'
                    }
                }
            },
            addiitionalProperties: false
        }
    }
});

console.log('Esquema de usuario creado');
await client.close();
