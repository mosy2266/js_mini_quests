// mini quest for js module

// ESM - Named Import
// import {add} from './math.js';

// ESM - Named Import
import {add, subtract} from './operations.js';

// ESM - Default Import
import User from './userProfile.js';

const newUser = new User('yun', 26);

console.log(add(2,3));
console.log(subtract(8,1));

console.log(`제 이름은 ${newUser.name}이고 ${newUser.age}살입니다.`);