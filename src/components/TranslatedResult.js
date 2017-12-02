import React from 'react';

const TranslatedResult = (props) => (
  <div>
    <h4>{props.lang}</h4>
    <div>
      {props.value}
    </div>
  </div>
);

export default TranslatedResult;