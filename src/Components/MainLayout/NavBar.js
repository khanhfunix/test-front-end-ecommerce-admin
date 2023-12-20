import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faUser,
 
  faTruck,
  faRightToBracket,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { logActions } from "../../store/userLog";
import { NavLink } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const classesIsActive = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <div className={classes.NavBar}>
      <h2>Admin Page</h2>
      <div className={classes.navContent}>
        <div className={classes.navitems}>
          <p>MAIN</p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faTableColumns}
                style={{ color: "#005eff" }}
              />
              <NavLink className={classesIsActive} to="/">
                DashBoard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navitems}>
          <p>LIST</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUser} style={{ color: "#005eff" }} />
              <NavLink className={classesIsActive} to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faBoxesStacked}
                style={{ color: "#005eff" }}
              />
              <NavLink className={classesIsActive} to="/products">
                Products
              </NavLink>
            </li>

            <li>
              <FontAwesomeIcon icon={faTruck} style={{ color: "#005eff" }} />
              <NavLink className={classesIsActive} to="/order">
                Order
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navitems}>
          <p>NEW</p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faBoxesStacked}
                style={{ color: "#005eff" }}
              />
              <NavLink className={classesIsActive} to="/add-product">
                New Product
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.navitems}>
          <p>USER</p>
          <FontAwesomeIcon
            icon={faRightToBracket}
            style={{ color: "#005eff" }}
          />
          <button
            onClick={() => {
              dispatch(logActions.logOut());
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
