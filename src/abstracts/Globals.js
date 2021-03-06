import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);
    --lightBlue: hsl(228, 100%, 75%);
    --blue: hsl(228, 100%, 66%);
    --grayishBlue: hsl(227, 13%, 52%);
    --veryLightBlue: hsl(228, 100%, 96%);
    --veryLightBlueActive: hsl(228, 100%, 92%);
    --darkBlue: hsl(228, 22%, 26%);
    --veryDarkBlue: hsl(229, 22%, 19%);
    --red: hsl(0, 83%, 65%);

    /* radius */
    --mainRadius: 1rem;
    --btnRadius: 5rem;

    /* grid gap */
    --gap: 5rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, .2);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    overflow-x: hidden;
    position: relative;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
