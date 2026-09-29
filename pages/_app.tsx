import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "../styles/GlobalStyles";
import { LightMode } from "../styles/theme";

const ResumeApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Reset />
      <ThemeProvider theme={LightMode}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
