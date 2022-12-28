"use strict";
// function stringToJson<T>(str: string): T {
//   const result = JSON.parse(str);
//   return result;
// }
// const user = stringToJson<User>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}');
// const address = stringToJson<Address>('{"street":"Rua Tamarindo","number":1}')
// user.name;
// address.street;
function stringToJson(str, id) {
    const result = JSON.parse(str);
    result.id = id;
    return result;
}
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());
const address = stringToJson('{"street":"Rua Tamarindo","number":1}', '#01');
user.id;
address.id;
console.log(user, address);
