import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { SelectTeam } from "./pages/SelectTeam";
import { Preventive } from "./pages/Preventive";
import { PreventiveSelected } from "./pages/PreventiveSelected";
import { Admin } from "./pages/Admin";
import { CompletePreventive } from "./pages/CompletePreventive";
// import { PreventiveRegistration } from './pages/PreventiveRegistration';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/select-team" exact component={SelectTeam} />
        <Route path="/6BEY6D7AC9" exact component={Admin} />
        <Route path="/6BEY6D7AC9/f10a7d9b1804add91c825fec4bc1729f" exact component={CompletePreventive} />
        <Route path="/select-team/:team" exact component={Preventive} />
        <Route
          path="/select-team/:team/:preventive/:local"
          component={PreventiveSelected}
        />
      </Switch>
    </BrowserRouter>
  );
}