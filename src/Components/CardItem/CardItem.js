import classes from "./CardItem.module.css";
import password_icon from "../../assets/password_icon.svg";
import progress_circle from "../../assets/progress_circle.svg";


const CardItem = ({tier, interest,css, text}) => {
  return (
    <div className= {`${classes.card} ${classes[css]}`}>
        <div className={classes.card_text}>
        <p>{text}</p>
        {tier ? <p className={classes.tier}>Tier</p> : <p className={classes.achieved}>75% Achieved <img src={progress_circle} alt ="" /></p>}
        </div>
        <h2><sup>#</sup> 6,3909.68 <img src={password_icon} alt ="" /> </h2>
        { interest &&
        <div className={classes.interest}>
            <hr></hr>
            <p>Interest as at today:  : ₦20,000</p>
        </div> }


    </div>
  )
}

export default CardItem