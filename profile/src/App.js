import Select from "./Component/Select";
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import Chat from "./Component/mychat";

import Profile from "./Component/Profile"

function App() {
  return (
    <>
    <BrowserRouter>
      <>
     <Switch>
        <Route exact path="/" component={Chat}/>
        <Route exact path="/:userid" component={Profile}/>
        

        
        
      </Switch>
      </>
      </BrowserRouter>
    
    </>
  );
}
export default App;
