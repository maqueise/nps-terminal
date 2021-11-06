type Props = {
  QuestionId:string
}

function OptionButtons(props:Props){
    const {QuestionId} = props
    return (
        <div>
          <input type="radio"  value={QuestionId}/>
          <input type="radio"  value={QuestionId}/>
        </div>
    )
}
export default OptionButtons
