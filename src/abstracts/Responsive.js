import { css } from "styled-components";

const breakpoints = {
  xs: "420px",
  sm: "550px",
  md: "826px",
  lg: "968px",
  xl: "1200px",
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
