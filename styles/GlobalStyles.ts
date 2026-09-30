import { createGlobalStyle } from "styled-components";
import { ITheme } from "./ITheme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        width: 100%;
        overflow-x: hidden;
        font-family: ${({ theme }) => theme.fontFamily};
        font-weight: 400;
        font-size: 14px;
        /* ch: 현재 폰트에서 '0' 한 글자의 가로 폭. -0.05ch = '0' 폭의 5%만큼 자간 좁힘 (폰트마다 실측값 다름) */
        letter-spacing: -0.05ch;
        font-display: swap;
        color: ${({ theme }) => theme.textColor.toString()};
    }

    body {
        width: 100%;
        margin: 0px;
        overflow: hidden;
        line-height: 1.5;
        background: ${({ theme }) => theme.backgroundColor.toString()};
    }

    strong {
        font-weight: 600;
    }

    sup {
        vertical-align: top;
        font-size: 0.6em;
    }

    .tabler-icon {
        width: 1.2em;
        height: 1.2em;
        vertical-align: middle;
    }

    ::selection {
        color: ${({ theme }) => theme.textColorInverse.toString()};
        background: ${({theme}) => theme.backgroundColor.toString()};
    }

`;

export default GlobalStyle;

