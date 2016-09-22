import AppDispatcher from '../AppDispatcher'

const NameActions = {
  createName(name) {
    AppDispatcher.dispatch({
      type: 'CREATE_NAME',
      payload: { name }
    })
  }
}

export default NameActions;
