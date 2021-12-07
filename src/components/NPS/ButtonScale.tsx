
import { useNpsContext } from '../../providers/NPSProvider'
import {Button} from './styled'

type Props = {
    color: string,
    scale: string
}
function ButtonScale({ color, scale }: Props){
  const{setScale,setDisableConfirm} = useNpsContext()
  const handleClick= () => {
    setScale(scale)
    setDisableConfirm(false)
  }
    return(
        <Button onClick={handleClick} color={color}>{scale}</Button>
    )
}
export default ButtonScale
