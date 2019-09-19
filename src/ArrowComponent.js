import React from "react";
import { Icon } from "semantic-ui-react";

const ArrowComponent = ({showArrow}) => {
  return (
    <div style={{ marginRight: 20, marginLeft: 20 }}>
      {showArrow ? (
        <Icon name="arrow alternate circle right outline" size="huge" />
      ) : null}
    </div>
  );
};

export default ArrowComponent;
