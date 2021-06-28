/**
 * Prototype Router
 * This is an example of a router integrating with "@react-three/fiber" by using useRouteMatch() with a
 * router outside of the route tree. This allows routes to change while not re-rendering the scene.
 *
 * Main feature: the <Canvas> component is outside of the Switch statement in the component tree.
 */

import colors from "colors.module.css";
import "./prototypes.css";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import { PrototypeTitle } from "./PrototypeTitle";

import prototypeRoutes from "./prototypeRoutes";

import { map as _map } from "lodash";

import Three from "./PrototypeRenderer";

export default function Prototypes() {
  let { path, url } = useRouteMatch();

  console.log(path, url);

  return (
    <>
      <div className={"flex-container"}>
        <div className={`flex1 ${colors["white-fill"]}`}>
          <h1 className={colors.indigo}>Prototypes</h1>
          <ul className={"nav-list"}>
            {_map(prototypeRoutes, (route, i) => (
              <li key={`${route.name}-${i}`}>
                <NavLink
                  to={`${url}${route.path}`}
                  activeClassName={"active"}
                  className={colors.link}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex2"}>
          <Switch>
            <Route path={`${path}/:prototypeId`}>
              <TitleProvider />
            </Route>
          </Switch>
          <Three />
        </div>
        <style>{`
          a.active {
            font-weight: 600;
          }
        `}</style>
      </div>
    </>
  );
}

const TitleProvider = () => {
  const { prototypeId: pid } = useParams();
  const title = prototypeRoutes[pid].name;

  return <PrototypeTitle>{title}</PrototypeTitle>;
};

