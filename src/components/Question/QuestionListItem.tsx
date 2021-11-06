import OptionButtons from "./OptionButtons"
import { QuestionItem } from "./styled"

type Props = {
  QuestionDescription?:string
}
function QuestionListItem(props:Props){
  const {QuestionDescription} = props
  return (
    <QuestionItem>
      <span className="question">{QuestionDescription}</span><OptionButtons QuestionId={"1"}/>
    </QuestionItem>
  )
}
export default QuestionListItem
