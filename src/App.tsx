import GlobalStyles from './styles/GlobalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import NPS from "./components/NPS"
import Teste from "./components/teste"

function App() {
  return (
    <>
    <GlobalStyles/>
    <Router>
            <Switch>
                <Route exact path="/">
                  <NPS/>
                </Route>
                <Route path="/teste">
                    <Teste/>
                </Route>
            </Switch>
      </Router>
      </>
    );
}

export default App;
