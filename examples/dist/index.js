"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classes = __importStar(require("./Classes"));
console.log('### Saídas: ###');
// // Array
// console.log(Arrays.names)
// // Tuplas
// console.log(Arrays.anime);
// console.log(Arrays.fullName);
// console.log(Arrays.person);
// Type Aliases
// console.log(TA.printCoord({x: 100, y:150}));
// console.log(TA.printBird({beaks: 1, wings: 2, biped: true }));
// console.log('###');
// console.log(TA.printSum({x: 2, y:2}))
// console.log(TA.printCPF(14982654727))
// Classes
// console.log("Classes:")
// const person1 = new Classes.Person("Alberto Couto", new Date("1995-09-05"), 27)
// const person2 = new Classes.Person("Creusa Fernandes", new Date("1960-08-02"), 62)
// console.log(person1, person2);
// person1.speak();
// person2.walk();
const human1 = new Classes.Human("Alberto F. Couto", new Date("1995-09-05"));
const human2 = new Classes.Human("Creusa F. Couto", new Date("1960/08/02"), 62);
console.log(human1, human2);
human1.age = 27;
console.log(human1);
