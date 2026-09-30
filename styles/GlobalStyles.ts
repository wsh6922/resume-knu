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
        font-size: calc(10px + 0.7vmin);
        letter-spacing: -0.05ch;
        font-display: swap;
        color: ${({ theme }) => theme.textColor.toString()};
    }

    body {
        width: 100%;
        overflow: hidden;
        line-height: 1.5;
        background: ${({ theme }) => theme.backgroundColor.toString()};
    }

    strong {
        font-weight: 600;
    }

    a:link, a:visited {
        color: inherit;
        text-decoration: none;
        transition: background 0.3s ease;

        &:hover {
            text-decoration: underline solid 1px;
        }
    }

    sup {
        vertical-align: top;
        font-size: 0.6em;
    }
`;

export default GlobalStyle;
