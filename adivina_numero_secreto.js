const readlineSync = require('readline-sync');

const NRO_RANDOM = Math.floor(Math.random()*100)+1;
console.log(NRO_RANDOM);

let nroUsuario = readlineSync.questionInt("Ingrese un numero entre 1 y 100: ");
while(nroUsuario <= 0 || nroUsuario > 100 || nroUsuario !== NRO_RANDOM){
    if(nroUsuario <= 0){
        console.log("El nro debe ser mayor a 0\n")
    }else if(nroUsuario > 100){
        console.log("El nro debe ser menor o igual a 100\n")
    }else{
        console.log("No acertaste el nro, sigue intentando...\n")
    }
    nroUsuario = readlineSync.questionInt("Ingrese un numero entre 1 y 100: ");
}
console.log("FELICITACIONES ACERTASTE EL NRO")