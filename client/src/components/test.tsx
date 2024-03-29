import React from 'react';
import axios from 'axios';

export function Test() {
  return (
    <div>
      <button
        type="submit"
        onClick={async () => {
          try {
            const response = await axios.get('http://localhost:3010');
            console.log(response.data);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Load
      </button>
    </div>
  );
}

export default Test;
