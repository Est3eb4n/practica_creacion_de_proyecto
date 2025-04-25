// install biblioteca lodash: npm i -E -D lodash

import pkg from 'lodash';
const { isEmpty } = pkg;

const data = {
    firstName: 'Ramsey',
    lastName: 'Anderson',
    age: 20,
    gender: 'M',
    email: 'randerson@mail.com',
}

const { firstName, lastName, age, gender, email, ...resto } = data;

const message = isEmpty(resto) ? 'ok' : 'Los datos ingresados no coinciden con la colección.';

console.log(message);