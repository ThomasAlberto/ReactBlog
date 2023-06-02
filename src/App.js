import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogPost from "./components/BlogPost";
import CreatePost from "./components/CreatePost";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";

function App(){
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/post/:id" component={BlogPost}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/create" component={CreatePost}/>
        </Switch>
      </Router>
  );
}

export default App;
