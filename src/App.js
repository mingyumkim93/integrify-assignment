import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Router>
        <Switch>
          <Route path="/user/:id">
            <UserDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
