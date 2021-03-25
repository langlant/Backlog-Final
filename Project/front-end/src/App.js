import Home from './Components/Home'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from "./Components/Login"
import Backlog from "./Components/Backlog"

function App() {
  return (
    <div>
      <Router>
        <Route path exact = "/" component={Login}></Route>
        <Route path = "/home" component = {Home}></Route>
        <Route path = "/backlog" component = {Backlog}></Route>
      </Router>
    </div>
   
  );
}
export default App;