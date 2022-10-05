
import classes from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import bell from "../../assets/notification.svg"
import profile from "../../assets/profile_icon.svg"

const Header = () => {
  return (
    <div className={classes.Header}>
        <h5>MY DASHBOARD</h5>
        <div className={classes.header_right}>
            <img src={bell} alt="bell"/> 
            <img src={profile} alt="profile" />
            <div className={classes.header_text}>
            <p >Benedict Ulinfo </p>
            <IoIosArrowDown />
            </div>
        </div>
    </div>
  )
}

export default Header

