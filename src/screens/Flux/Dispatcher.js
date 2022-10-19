class Dispatcher {
  handlers = [];

  register(handle) {
    this.handlers.push(handle);
  }

  dispatch(action) {
    for (let handle of this.handlers) handle(action);
  }
}
export default new Dispatcher();
