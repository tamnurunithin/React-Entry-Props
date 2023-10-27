import React from "react";

function Entry(props) {
  return (
    <div>
      <dt>
        <span>{props.name}</span>
        <span>{props.emoji}</span>
      </dt>
      <dd>
        <span>{props.description}</span>
      </dd>
    </div>
  );
}

export default Entry;
