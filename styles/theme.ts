import Color from "color";
import { ITheme } from "./ITheme";


const FontFamily = [
    "Pretendard",
    "Inter",
    "Noto Sans KR",
    "Noto Sans JP",
    "Noto Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
].map((font) => (font.includes(" ") ? `"${font}"` : font)).join(",");

const MonospaceFontFamily = [
    "monospace",
].map((font) => (font.includes(" ") ? `"${font}"` : font)).join(",");

const White = Color.rgb(255, 255, 255);
const Black = Color.rgb(11, 27, 56);

export const LightMode: ITheme = {
    fontFamily: FontFamily,
    monospaceFontFamily: MonospaceFontFamily,
    textColor: Black,
    textColorInverse: White,
    backgroundColor: White
}

export const DarkMode: ITheme = {
    fontFamily: FontFamily,
    monospaceFontFamily: MonospaceFontFamily,
    textColor: White,
    textColorInverse: Black,
    backgroundColor: Black
}

export const Breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
}

export const boxShadow = (
    color: Color,
    x: number,
    y: number,
    r: number,
    s?: number,
) => {
    return `${x}em ${y}em ${r}em ${s !== undefined ? `${s}em ` : ""}${color.alpha(0.15).toString()}`;
};