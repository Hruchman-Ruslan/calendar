import { css } from "@emotion/react";

import { theme } from "./theme";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap");

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: ${theme.fontSizes.medium};
    font-style: normal;
    color: ${theme.colors.lightGray};
    background-color: ${theme.colors.bgColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
