import {css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Breakpoints } from '../styles/theme';

type ResponsiveTemplateFn = (
    first: TemplateStringsArray | CSSObject,
    ...interploations: SimpleInterpolation[]
) => FlattenSimpleInterpolation

type ResponsiveFns = {
    [K in keyof typeof Breakpoints]: ResponsiveTemplateFn
}

const responsiveInit = (mediaQuery: (value: number) => string) => {
    let responsiveFns: Partial<ResponsiveFns> = {}
    let key: keyof typeof Breakpoints
    for (key in Breakpoints) {
        const x = key
        responsiveFns[x] = (...varargs) => css`
        ${mediaQuery(Breakpoints[x])} {
            ${css(...varargs)};
        }
        `
    }
    return responsiveFns as ResponsiveFns
}

const sizeOver = responsiveInit((x) => `@media (min-width: ${x}px)`)
const sizeUnder = responsiveInit((x) => `@media (max-width: ${x}px)`)

export { sizeOver, sizeUnder }