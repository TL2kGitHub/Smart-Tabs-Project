import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <img src="TS.png" alt="ST"></img>
        <nav>
          <titles>
            <space>
              <Link to="/">Home</Link>
            </space>
            <space>
              <Link to="/Login">Login</Link>
            </space>
            <space>
              <Link to="/Register">Register</Link>
            </space>
            <space>
              <Link to="/Activity-Graph">Activity Graph</Link>
            </space>
          </titles>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
