import {Container} from './styled'
import logotipo from '../../images/logotipo@2x.png'
import logoIfms from '../../images/ifms.png'

function Header() {
    return (
    <Container>
      <img src={logotipo} alt="logotipo"/>
      <img src={logoIfms} alt="logotipo IFMS"/>
    </Container>
    )
}

export default Header
