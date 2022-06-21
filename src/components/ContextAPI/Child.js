import React from "react";
import GrandChild from "./GrandChild";

import { useEffect } from "react";
import { useContext } from "react";
import TestContext from "../../context/testContext";
function Child() {
  const { text, setText } = useContext(TestContext);

  return (
    <div>
      <p>Text: {text}</p>

      <button
        onClick={() => {
          setText("Child COmponent");
        }}
      >
        Change to Child
      </button>

      <GrandChild />
    </div>
  );
}

export default Child;
