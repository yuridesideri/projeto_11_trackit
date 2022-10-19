import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary, input,
    time, mark, audio, video, button, ::placeholder{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-style: inherit;
        vertical-align: baseline;
        font-size: 100%;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }
    body {
        line-height: 1;
        font-size: 1rem;
        width: 100vw;
        height: 100vh;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input{
        text-indent: 7px;
        width: 303px;
        height: 40px;
        font-size: 19.976px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    button{
        background-color: rgba(82, 182, 255, 1);
        color: white;
    }
    input::placeholder{
        color: rgba(219, 219, 219, 1)
    }
    input:focus{
        outline: 1px solid rgba(82, 182, 255, 1);;
    }
    input:invalid{
        color: #e36262;
        caret-color: black;
    }
    input:disabled{
        background-color: rgba(212, 212, 212, 1) !important;
    }
    div,section,header,footer,nav{
        width: inherit;
    }
    
`

export default GlobalStyle;