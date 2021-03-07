import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { breakpointsMedia } from '../utils/breakpointsMedia';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  input[type="radio"] {
        visibility: hidden;
        position: absolute;
  }
  svg {
    margin: auto;
  }
  input[type="radio"]:checked+label {
    border: 2px solid #35B6FF;
    background: rgba(211, 234, 255, 0.56);
  }
  .react-datepicker-wrapper {
    display: block;
  }
`;
export default GlobalStyle;
