/**
 * 
 *  INTRO3-HERENCIA.
 *                               enunciado:
 * Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(),
 * que sólo retorna sueldoBase.
 * La clase Cl_obrero hereda de Cl_empleado y
 * también tiene horas extras a $2 cada una;
 * la clase Cl_administrativo hereda de Cl_empleado y tiene una prima fija.
 * El método calcularSueldo() debe hacer lo indicado en cada clase hija.
 * Ej.
 *  - calcularSueldo() en obrero es: this.sueldoBase + this.horasExtras * 2
 *  - calcularSueldo() en administrativo es: this.sueldoBase + this.primaFija
 * 
 */

// import Cl_empleado from "./Cl_empleado.js";
import Cl_obrero from "./Cl_obrero.js";
import Cl_administrativo from "./Cl_administrativo.js";

// let empleado = new Cl_empleado();
let obrero1 = new Cl_obrero(1000, 25);
let obrero2 = new Cl_obrero(2000, 50);
let administrativo1 = new Cl_administrativo(1000, 200);
let administrativo2 = new Cl_administrativo(2000, 400);

let salida = document.getElementById("salida");

salida.innerHTML = `
El sueldo final del obrero 1 es: ${obrero1.calcularSueldo()}<br>
El sueldo final del obrero 2 es: ${obrero2.calcularSueldo()}<br>
El sueldo final del administrativo 1 es: ${administrativo1.calcularSueldo()}<br>
EL sueldo final del administrativo 2 es: ${administrativo2.calcularSueldo()}
`;