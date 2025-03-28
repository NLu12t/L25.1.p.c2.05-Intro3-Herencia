export default class Cl_empleado {
    constructor(sueldoBase) {
        this.sueldoBase = sueldoBase;
    }
    //set y get
    set sueldoBase(sB) {
        this._sueldoBase = sB;
    }
    get sueldoBase() {
        return this._sueldoBase;
    }

    calcularSueldo() { 
        return this.sueldoBase;
    }
}