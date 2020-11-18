import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`




:root {
    --MaxWidth: 1280px;

    --White: #fff;
    --Black: #000;
    --DarkNavy: #000023;
    --Grey: #363a4e;
    --Pink: #FF0D99;
    --Lime: #eeff41;
    --Smoke: #eceff1;
    --Orange: #FF330D;
    --Blue: #0000ba;



    --FontSuper: 3.5rem;
    --FontBig: 2rem;
    --FontMed: 1.5rem;
    --FontSmall: 1.1rem;


    --Border: 10px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
}

body {
    background-color: var(--White);
    width: 100vw;
    
}

`;