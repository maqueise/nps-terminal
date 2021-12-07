import GlobalStyles from './styles/GlobalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import NPS from "./components/NPS"
import Header from './layout/Header'
import Main from './layout/Main'
import { NPSProvider } from './providers/NPSProvider'
import FinishMessage from './components/FinishMessage'
import Question from './components/Question'



function App() {
  return (
    <>
    <GlobalStyles/>
    <Header/>
    <Main>
      <Router>
            <Switch>
                <Route exact path="/">
                 <NPSProvider>
                  <NPS/>
                 </NPSProvider>

                </Route>
                <Route path="/finish">
                  <FinishMessage/>
                </Route>
                <Route path="/question">
                  <Question/>
                </Route>
            </Switch>
      </Router>
      </Main>
      </>
    );
}

export default App;
