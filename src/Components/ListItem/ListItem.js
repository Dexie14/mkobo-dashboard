import classes from "./ListItem.module.css";

const ListItem = ({icons,text, brand, span, amounts}) => {
  return (
    <div className={classes.ListItem}>
    <div className={classes.list}>
      <div className={classes.details}>
        <div>
          <img src={icons} alt="jay" />
        </div>
        <div>
          <p>{text}</p>
          <h6>{brand} <span>{span}</span></h6>
        </div>
      </div>
      <div className={classes.amounts}>
        <h6>
          <sup>#</sup>{amounts}
        </h6>
        <p>#300,000</p>
      </div>
    </div>
    <hr></hr>
    </div>
  );
};

export default ListItem;
