import React from "react";
import HOC from "./HOC";

function LikesCount(props) {
  return (
    <div>
      Hello {props.username}. <br />
      {props.CountNumber} <br />
      <button onClick={props.handleCLick}>Like👍🏻</button>
    </div>
  );
}

export default HOC(LikesCount, 5);
