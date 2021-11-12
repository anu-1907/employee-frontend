import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import EmployeeList from './Components/EmployeeList';
import CreateEmployee from "./Components/CreateEmployee"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  UpdateEmployee from "./Components/UpdateEmployee";
import ViewEmployee from "./Components/ViewEmployee"

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={EmployeeList}/>
          <Route exact path="/add"  component={CreateEmployee}/>
          <Route exact path="/update-employee/:id" component={UpdateEmployee}/>
          <Route exact path="/view-employee/:id" component={ViewEmployee}/>


        </Switch>


      </Router>
        
    </div>
  );
}

export default App;
