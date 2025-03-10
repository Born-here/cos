import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// 브레이크포인트 변수
const breakpoints = {
    mobile: 390,
    tablet: 1024,
    desktop: 1920,
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// 레이아웃 컴포넌트 - styled-components로 구현
export const Container = styled.div`
    width: 100%;
`;

export const Inner = styled.div`
    width: 100%;
    padding: 0 20px; /* 모바일 패딩 - 이미지에서 확인 */

    ${respondTo('tabletMore')} {
        padding: 0 30px; /* PC 패딩 - 이미지에서 확인 */
    }
`;

export default GlobalStyle;
