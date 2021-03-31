import Select from "./Component/Select";
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import {Link,Redirect} from 'react-router-dom';
import Profile from "./Component/Profile"
function App() {
  return (
    <>
    <BrowserRouter>
      <>
     <Switch>
        <Route exact path="/" component={Select}/>
        <Route exact path="/Profile/:userid" component={Profile}/>
        
      </Switch>
      </>
      </BrowserRouter>
    
    </>
  );
}
export default App;
