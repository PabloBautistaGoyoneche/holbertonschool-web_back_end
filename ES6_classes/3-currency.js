class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    get code() {
      return this._code;
    }
  
    set code(nuevoCodigo) {
      this._code = nuevoCodigo;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombre) {
      this._name = nuevoNombre;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
