//displays features added to the users card (on the left)
import React from 'react';

const AddedFeature = props => {
  console.log('LEFT side', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => props.remove(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
