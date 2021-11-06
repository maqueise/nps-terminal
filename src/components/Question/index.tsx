import { useState } from "react"
import QuestionListItem from "./QuestionListItem"
import { QuestionContainer, QuestionList } from "./styled"

function Question(){
  const [questions,setQuestions] = useState([{id:1,description:"Atendimento"}])
  return(
   <QuestionContainer>
     <h1>Como Você Avalia</h1>
     <QuestionList>

     </QuestionList>
   </QuestionContainer>
  )
}
export default Question
