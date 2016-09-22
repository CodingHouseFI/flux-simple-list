import React from 'react';
import NameForm from './NameForm';
import NameList from './NameList';

import NameActions from '../actions/NameActions'
import NameStore from '../stores/NameStore'

const App = React.createClass({
  getInitialState() {
    return {
      names: NameStore.getAll()
    }
  },

  componentWillMount() {
    NameStore.startListening(this._onChange);
  },

  componentWillUnmount() {
    NameStore.stopListening(this._onChange);
  },

  _onChange() {
    this.setState({
      names: NameStore.getAll()
    })
  },

  addName(newName) {
    NameActions.createName(newName);
  },

  render() {
    const { names } = this.state;

    return (
      <div className='container'>
        <h1>Simple Name List</h1>
        <NameForm addName={this.addName} />
        <NameList names={names} />
      </div>
    )
  }
})

export default App;
