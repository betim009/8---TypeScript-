"use strict";
// // 1. Type Assertions
// type Address = {
//     street: string,
//     number: number | null,
//   }
//   type User = {
//     name: string,
//     email: string,
//     password: string,
//   }
//   // função que converte de string para json
//   function stringToJson(str: string): unknown {
//     const result = JSON.parse(str);
//     return result;
//   }
//   // utilizando o "as" para converter de unknown para User
//   const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User
//   // Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
//   const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')
//   user.name;
//   address.street;
//   console.log(user, address);
// const str: unknown = 'texto'; // simulando um valor supostamente desconhecido
// // str.split(''); // Dispara um erro por aplicar um split em um tipo desconhecido
// const words = (str as string).split('') // Corrigindo o erro acima usando o 'as'  
// console.log(words[0])
