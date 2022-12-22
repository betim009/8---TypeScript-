"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCPF = exports.printSum = exports.printBird = exports.printCoord = void 0;
function printCoord(pt) {
    return (`
    O valor da coordenada x é:${pt.x}
    O valor da coordenada y é:${pt.y}`);
}
exports.printCoord = printCoord;
;
function printBird(pt) {
    return (`
    Total de asas: ${pt.wings}
    Total de bicos: ${pt.beaks}
    é um biped? ${pt.biped}`);
}
exports.printBird = printBird;
;
function printSum(pt) {
    const result = pt.x + pt.y;
    return `A soma dos numeros ${pt.x} + ${pt.y} é: ${result}`;
}
exports.printSum = printSum;
//TypeUnions
function printCPF(cpf) {
    return (`Seu cpf é: ${cpf}`);
}
exports.printCPF = printCPF;
;
