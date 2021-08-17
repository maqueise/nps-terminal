interface PropType{
    color?: string
}
function ButtonNps(props:PropType){
    return(
        <button>{props.color}</button>
    )
}
export default ButtonNps
