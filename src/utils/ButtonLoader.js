import React from "react";
import Loader from "react-loader-spinner";

export default function ButtonLoader(props) {
  return (
    <Loader
      type="TailSpin"
      color="#3cb64f"
      height={props.height ? props.height : 25}
      width={props.width ? props.width : 100}
      // timeout={200000}
    />
  );
}
