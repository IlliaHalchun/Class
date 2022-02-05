class Storage {
  constructor(name, type = 'local') {
    this.name = name;
    this.type = type;
  }

  get() {
    console.log(this._type.getItem(this._name) )
    return this._type.getItem(this._name)
  }

  set(value) {
    this._type.setItem(this._name, value)
  }

  clear() {
    this._type.removeItem(this._name)
  }

  isEmpty() {
    let isEmptyValue = this._type.getItem(this._name) === null || undefined;

      if(isEmptyValue) {
        console.log(true)
        return true
      }

      console.log(false)
      return false
  }

  get storageInfo() {
    const result = `name: ${this._name}\ntype: ${this._type}`;
    console.log(result)
    return result
  }

  get name() {
    console.log(this._name)
    return this._name
  }

  get type() {
    console.log(this._type)
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

