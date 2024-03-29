import React, { useState } from "react";
import axios from "axios";

export function Test() {
  const [output, setOutput] = useState("");

  return (
    <div>
      <button
        type="submit"
        onClick={async () => {
          try {
            const response = await axios.get("http://localhost:3010");

            console.log(1123);
            setOutput(() => response.data);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Load
      </button>
      {output}
    </div>
  );
}

export default Test;
