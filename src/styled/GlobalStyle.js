import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// 브레이크포인트 변수
const breakpoints = {
    mobile: 390,
    tablet: 1024,
    desktop: 1920,
};

// 색상 변수 설정
export const colors = {
    // 블랙 계열
    black: '#231F20',
    white: '#ffffff',

    // 그레이 계열
    gray100: '#231f20 ',
    gray90: '#3e3e3f',
    gray80: '#57585a',
    gray70: '#6c6d70',
    gray60: '#808285',
    gray50: '#939598',
    gray40: '#a8a9ad ',
    gray30: '#bcbdc0',
    gray20: '#d1d2d4 ',
    gray10: '#e6e7e9',

    // 프라이머리 계열 (파란색)
    primary100: '#000000',
    primary90: '#090e17',
    primary80: '#181d2d',
    primary70: '#282c44',
    primary60: '#373b5a',
    primary50: '#474e71',
    primary40: '#5e6893',
    primary30: '#868eae',
    primary20: '#aeb4c9',
    primary10: '#d7dae4',
    primary0: '#ffffff',
};

// 폰트 변수 설정
const fonts = {
    gowunDodum: "'GowunDodum', sans-serif", // 본문용 폰트 (고운돋움)
    oswald: "'Oswald', sans-serif", // 강조용 폰트 (Oswald)
};

// 미디어 쿼리 헬퍼 함수
export const respondTo = (breakpoint) => {
    const sizes = {
        mobile: breakpoints.mobile,
        tablet: breakpoints.tablet,
        desktop: breakpoints.desktop,
    };

    switch (breakpoint) {
        case 'mobile':
            return `@media (max-width: ${sizes.mobile}px)`;
        case 'tablet':
            return `@media (min-width: ${sizes.mobile + 1}px) and (max-width: ${sizes.tablet}px)`;
        case 'tabletMore':
            return `@media (min-width: ${sizes.mobile + 1}px)`;
        case 'desktop':
            return `@media (min-width: ${sizes.tablet + 1}px)`;
        default:
            return '';
    }
};

// 기본 전역 스타일
const GlobalStyle = createGlobalStyle`
  /* 고운돋움 폰트 (눈누에서 제공) */
  @font-face {
    font-family: 'GowunDodum';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  /* 구글 Oswald 폰트 */
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;700&display=swap');
  
  /* 기본 스타일 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* 본문 폰트 적용 */
  body {
    font-family: ${fonts.gowunDodum}; /* 본문 폰트: 고운돋움 */
    color: #333;
    line-height: 1.6;
  }
  
  /* 제목 및 버튼 폰트 적용 */
  h1, h2, h3, h4, h5, h6, button {
    font-family: ${fonts.oswald}; /* 강조 폰트: Oswald */
  }
  
  /* 기본 스타일 */
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul, ol {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

// 레이아웃 컴포넌트 - styled-components로 구현
export const Container = styled.div`
    width: 100%;
`;

export const Inner = styled.div`
    max-width: 1520px;
    width: 100%;
    /* padding: 0 20px; */
    
    /* ${respondTo('tabletMore')} {
        padding: 0 30px; /* PC 패딩 */
    } */
`;
