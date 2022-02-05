class Storage {
  constructor(name, type = 'local') {
    this.name = name;
    this.type = type;
  }

  get() {
    return this._type.getItem(this._name)
  }

  set(value) {
    this._type.setItem(this._name, value)
  }

  clear() {
    this._type.removeItem(this._name)
  }

  isEmpty() {
    let isEmptyValue = this.get() === null || 'undefined'; 

      if(isEmptyValue) {
        return true
      }

      return false
  }

  get name() {
    return this._name
  }

  get type() {
    return (this._type)
  }

  set name(value) {
    const toLowerName = value.toLowerCase();
    this._name = toLowerName;
  }

  set type(value) {
    const toLowerType = value.toLowerCase();

    switch(toLowerType) {
      case 'local':
        this._type = localStorage;
        break
      case 'session':
        this._type = sessionStorage;
        break
      default:
        throw new Error(`${value} is not correct type!`);
    }
  }
}


let names = new Storage('names')

let types = new Storage('types', 'session')

