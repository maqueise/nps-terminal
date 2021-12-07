
import { useNpsContext } from "../../providers/NPSProvider"
import ButtonScale from "./ButtonScale"
import {Container,OptionGrid,Title,Subtitle,ConfirmButton} from "./styled"
import { useHistory } from "react-router-dom"
import { registerNps } from "../../services/api"
function NPS(){

const {disableConfirm,scale} = useNpsContext()
const history = useHistory()
  const handleConfirmClick = async ()=>{
  //const response = await registerNps(scale)
    history.push('/question')

}
    return(
        <Container>
           <Title>
            Pesquisa de Satisfação
           </Title>
           <Subtitle>
            Em uma escala de 0 a 10, o quanto você indicaria nossa empresa
            a um amigo ou familiar?
           </Subtitle>
        <OptionGrid>
            <ButtonScale scale="0" color="#B61F25"/>
            <ButtonScale scale="1" color="#D41F25"/>
            <ButtonScale scale="2" color="#EF5225"/>
            <ButtonScale scale="3" color="#F26E22"/>
            <ButtonScale scale="4" color="#F9A728"/>
            <ButtonScale scale="5" color="#FDC930"/>
            <ButtonScale scale="6" color="#EBDB23"/>
            <ButtonScale scale="7" color="#E7E742"/>
            <ButtonScale scale="8" color="#C4D832"/>
            <ButtonScale scale="9" color="#B0CE3D"/>
            <ButtonScale scale="10" color="#62B54E"/>
        </OptionGrid>
        <ConfirmButton disabled={disableConfirm} onClick={handleConfirmClick}>Confirmar</ConfirmButton>
        </Container>

    )
}

export default NPS
