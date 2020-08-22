import React from "react";

import Advice from "./advice/Advice";

const AdviceList = (props) => {
  return (
    <React.Fragment>
      {props.advices.map((a) => (
        <Advice key={a.id} title={a.title} text={a.text} />
      ))}
    </React.Fragment>
  );
};

export default AdviceList;
