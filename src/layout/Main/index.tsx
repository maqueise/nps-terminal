
import {Container} from './styled';

type Props = {
  children: JSX.Element,
};
function Main({children}: Props) {
    return (

        <Container>
            {children}
        </Container>

    )
}
export default Main;
