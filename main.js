class Storage {
  constructor(name, options) {
    this.name = name;
    this.type = options.storageType;
    this.defaultValue = options.defaultValue;
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
    let isEmptyValue = this.get() === null || this.get() === 'undefined'; 

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

  set defaultValue(value) {
    if(value === undefined || null) return
    this.set(value);
    this._defaultValue = value;
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

let localFirst = new Storage('first', {
  defaultValue: 'default',
  storageType: 'local'
})

let sessionSecond = new Storage('second', {
  storageType: 'session'
})