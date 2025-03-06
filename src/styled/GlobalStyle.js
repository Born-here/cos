import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
:root {
}

 ${reset}
/* reset */
body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  textarea,
  p,
  blockquote,
  th,
  td,
  input,
  select,
  button,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  "NanumSquareNeo", Pretendard, sans-serif;
  }
  fieldset,
  img {
    border: 0 none;
  }
    /* 추후 추가 예정 */
`;
export default GlobalStyle;
