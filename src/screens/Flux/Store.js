import Dispatcher from './Dispatcher';
import {EventEmitter} from 'events';
class Store {
  token = '';
  user = null;

  setToken(token) {
    this.token = token;
    this.emit('change');
  }

  setUser(user) {
    this.user = user;
    this.emit('change');
  }

  handle(action) {
    switch (action.type) {
      case 'SET_TOKEN':
        this.setToken(action.payload.token);
        break;
      case 'SET_USER':
        this.setUser(action.payload.user);
        break;
    }
  }
}

const store = new Store();
Dispatcher.register(store.handle.bind(store));
export default store;
