type Point = {
    x: number,
    y: number,
};

export function printCoord(pt: Point) {
    return (`
    O valor da coordenada x é:${pt.x}
    O valor da coordenada y é:${pt.y}`
    );
};

type Bird = {
    wings: 2,
    beaks: 1,
    biped: true,
}

export function printBird(pt: Bird){
    return (`
    Total de asas: ${pt.wings}
    Total de bicos: ${pt.beaks}
    é um biped? ${pt.biped}`
    )
};

type Sum = {
    x: number,
    y: number
};

export function printSum(pt: Sum) {
    const result = pt.x + pt.y;
    return `A soma dos numeros ${pt.x} + ${pt.y} é: ${result}`;
}

type Address = {
    publicPlace: string;
    number: number;
    district: string;
    city: string;
    state: string;
}


//TypeUnions
export function printCPF(cpf: number | string){
    return(`Seu cpf é: ${cpf}`)
};

// Exemplos:
type StatesOfMatter = "liquid" | "solid" | "gaseous";
type IdentifyingDocument = string | number;
type SO = "linux" | "mac os" | "windows";
type Vowels = "a" | "e" | "i" | "o" | "u";