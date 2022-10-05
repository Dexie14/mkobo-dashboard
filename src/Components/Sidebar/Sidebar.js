
import {sideMenubar} from "../../Constants/index";
import classes from "./Sidebar.module.css";
import { NavLink, Link } from "react-router-dom";
import mkobo_logo from "../../assets/mkobo_logo.svg"
import faq from "../../assets/faq.svg"
import talk_icon from "../../assets/talk_icon.svg"





const Sidebar = () => {
  return (
    <div className={classes.sidebar}>

      <div className={classes.mkobo_logo}>
        <Link to="/">
          <img src={mkobo_logo} alt="mkobo_logo" />
        </Link>
      </div>

      <div>
        {sideMenubar.map((item) => (
          <NavLink
            to={item.link}
            className={(navData) =>
              navData.isActive
                ? `${classes.active} ${classes.Menuitem}`
                : `${classes.Menuitem}`
            }
          >
            <img src={item.image} alt="" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </div>

      
      <div className={classes.sidebar_bottom}>
        <h5>Help & Support</h5>
        <div className={classes.faq}>
            <img src={faq} alt = "faq"/>
            <span>FAQ's</span>
        </div>
        <div className={classes.talk}>
            <img src={talk_icon} alt = "talk_icon"/>
            <span>Talk to someone</span>
        </div>
      </div>
        
   
   
    </div>
  );
};

export default Sidebar;
