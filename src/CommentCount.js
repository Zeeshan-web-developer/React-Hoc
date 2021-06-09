import React from "react";
import HOC from "./HOC";

function CommentCount(props) {
  return (
    <div>
      Total Comments : {props.CountNumber} <br />
      <button onClick={props.handleCLick1}>Add Comment!</button>
    </div>
  );
}

const EnhancedComments = HOC(CommentCount, 10);

export default EnhancedComments;
