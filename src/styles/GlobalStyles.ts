import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,body{
    min-height:100vh;
}
body{
    font-family: 'Roboto', sans-serif;
}
h1,h2,h3{
    font-family: 'Poppins',sans-serif;
}
`
