import classes from "./Layout.module.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {

  return (
    <div className={classes.layout}>
        <div className={classes.sidebar}>
            <Sidebar/>
        </div>
        <div className={classes.mainbar}>
            <Header />
            <div className={classes.dashboard_content}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout