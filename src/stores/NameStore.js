import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import Storage from '../Storage';

let _names = [];

const NameStore = Object.assign({}, EventEmitter.prototype, {
  startListening(callback) {
    this.on('CHANGE', callback);
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback);
  },

  getAll() {
    return _names;
  }
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  switch(type) {
    case 'CREATE_NAME':
      const { name } = payload;
      _names.push(name);
      NameStore.emit('CHANGE');
      break;
  }
});

export default NameStore;
