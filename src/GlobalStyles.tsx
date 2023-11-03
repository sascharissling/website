import { Global, css } from "@emotion/react";
import React from 'react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "Source Sans Pro", sans-serif;
          background: #f7f8f7;
        }

        h1,
        h2,
        h3 {
          font-family: "Merriweather", serif;
        }

        /* width */
        *::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        *::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        *::-webkit-scrollbar-thumb {
          background: #ff4500;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #ff4500;
        }
      `}
    />
  );
}

export default GlobalStyles;

//FONTS
// font-family: 'Abril Fatface', cursive;
// font-family: "Merriweather", serif;
// font-family: 'Source Sans Pro', sans-serif;
