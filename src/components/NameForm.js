import React from 'react';

const NameForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { nameInput } = this.refs;

    let newName = nameInput.value;
    nameInput.value = '';
    nameInput.focus();

    this.props.addName(newName);
  },
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input ref='nameInput' type="text" required/>
        <button>Add</button>
      </form>
    )
  }
})

export default NameForm;
