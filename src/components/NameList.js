import React from 'react';

const NameList = props => {
  const { names } = props;

  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  )
}

export default NameList;
