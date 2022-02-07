const defaultOptions = {
  type: 'local',
}

class Storage {
  constructor(name, options = defaultOptions) {
    this.name = name;
    this.type = options.type;
    this.defaultValue = options.defaultValue || 'undefined';
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
    return isEmptyValue
  }

  get name() {
    return this._name
  }

  get type() {
    return this._type
  }

  set name(value) {
    this._name = value.toLowerCase();
  }

  set defaultValue(value) {
    this._defaultValue = value;
    this.set(value)
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

let localFirst = generateStorage('first', {
  defaultValue: 'default',
  type: 'local'
} )

function generateStorage(name, options) {
  const storage = new Storage(name, options);
  storage.set(options.defaultValue)
  return storage
}