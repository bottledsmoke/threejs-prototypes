/**
 * Prototype Router
 * This is an example of a router integrating with "@react-three/fiber" by using useRouteMatch() with a
 * router outside of the route tree. This allows routes to change while not re-rendering the scene.
 *
 * Main feature: the <Canvas> component is outside of the Switch statement in the component tree.
 *
 * Using this approach, we can maintain a renderer across route changes. This unlocks the ability
 * to animate 3D assets in and out of the scene, move the camera from one page to the next, etc.
 *
 * The current implementation plan is to use three.config.json files in each prototype and animate the
 * camera to the defaults for each prototype. I'm currently working on ZustandCamera first. The completion
 * of that prototype will lead to the adoption of the features above.
 */

import colors from "colors.module.css";
import "./prototypes.css";
import {
  Routes,
  Route,
  NavLink,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";

import { PrototypeTitle } from "./PrototypeTitle";

import prototypeRoutes from "./prototypeRoutes";

import { map as _map } from "lodash";

import Three from "./PrototypeRenderer";

export default function Prototypes() {
  let location = useLocation();

  const url = location.pathname;
  console.log(location);

  return (
    <>
      <div className={"flex-container"}>
        <div className={`flex1 ${colors["white-fill"]}`}>
          <h1 className={colors.indigo}>Prototypes</h1>
          <ul className={"nav-list"}>
            {_map(prototypeRoutes, (route, i) => (
              <li key={`${route.name}-${i}`}>
                <NavLink
                  to={`${url === "/" ? "/prototypes" : url}${route.path}`}
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
          <Routes>
            <Route
              path={`:prototypeId`}
              element={<TitleProvider></TitleProvider>}
            ></Route>
          </Routes>
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
