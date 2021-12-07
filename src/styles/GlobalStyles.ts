import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #59518C;
  --secundary:#59273F;
  --bg-light:#C2BFD9;
  font-size: 16px;

}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,body{
    min-height:100vh;
    width: 100vw;
}
body{
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary);
}
h1,h2,h3{
    font-family: 'Poppins',sans-serif;
}
`
