import { useEffect, useState } from "react"
import QuestionListItem from "./QuestionListItem"
import { QuestionContainer, QuestionList } from "./styled"

import {getQuestions} from "../../services/api"

function Question(){
const [questions,setQuestions] = useState([])

  useEffect(() => {
    getQuestions().then(res => {  setQuestions(Array.from(res.data)) })
  })

  return(
   <QuestionContainer>
     <h1>Como Você Avalia</h1>
      {questions.map(question => console.log(question))}
   </QuestionContainer>
  )
}
export default Question
