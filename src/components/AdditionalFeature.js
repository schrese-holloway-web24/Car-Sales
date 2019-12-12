//displays each individual option the user has to add to their car(right card)
import React from 'react';

import { connect } from 'react-redux';

const AdditionalFeature = props => {
console.log(props);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.add(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default connect(null, {})(AdditionalFeature);
export default AdditionalFeature