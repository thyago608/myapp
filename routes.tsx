import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { SelectTeam } from "./src/pages/SelectTeam";
import { Preventive } from "./src/pages/Preventive";
import { PreventiveSelected } from "./src/pages/PreventiveSelected";
import { PreventiveRegistration } from "./src/pages/PreventiveRegistration";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/select-team" exact component={SelectTeam} />
        <Route path="/6BEY6D7AC9" exact component={PreventiveRegistration} />
        <Route path="/select-team/:team" exact component={Preventive} />
        <Route
          path="/select-team/:team/:preventive/:local"
          component={PreventiveSelected}
        />
      </Switch>
    </BrowserRouter>
  );
}