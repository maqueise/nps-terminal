import { useEffect } from "react";
import { useHistory } from "react-router-dom";


import { MessageContainer } from "./styled";

function FinishMessage(){
  const history = useHistory();
  useEffect(()=>{
      setTimeout(()=>{
        history.push('/')
      },4000)
  },[history])
  return(
    <MessageContainer>
      <h1>Obrigado!!</h1>
      <h2>Sua opinião é muito importante para nós</h2>
    </MessageContainer>
  )
}
export default FinishMessage
