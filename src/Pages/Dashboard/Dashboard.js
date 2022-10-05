import classes from "./Dashboard.module.css";
import CardItem from "../../Components/CardItem/CardItem";
import ListItem from "../../Components/ListItem/ListItem";
import {cards} from "../../Constants/index";
import {todayList} from "../../Constants/index";
import {septList} from "../../Constants/index";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSquare } from "react-icons/io";
import calendar from "../../assets/calendar_icon.svg";
import mkobo from "../../assets/mkoboSend_icon.svg";
import fundAcc_icon from "../../assets/fundAcc_icon.svg";
import phone_icon from "../../assets/phone_icon.svg";
import bills_icon from "../../assets/bills_icon.svg";
import save_icon from "../../assets/save_icon.svg";
import cashback_icon from "../../assets/cashback_icon.svg";


const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>

      <h4>Hello Bennedict,</h4>

      {/* The card array */}

      <div className={classes.cardarray}>
        <IoIosArrowBack className={classes.arrow}/>
      {cards.map((item) => (
          <CardItem
          key={item.id}
          text={item.text} 
          css={item.css} 
          tier={item.tier} 
          interest={item.interest} 
          />
      ))}
      <IoIosArrowForward className={classes.arrow2}/>
      </div>

      <hr className={classes.sectionrule}></hr>

        {/* Content section */}


      <div className={classes.content}>

        {/* The left side of the dashboard content */}
        
        <div className={classes.content_left}>
              <div className={classes.accounts}>
                <p>Spending  Account</p>
                <p>Linked accounts</p>
              </div>
              <p className={classes.recent}>Recent Transaction</p>

              <div className={classes.Balance} >
              <div className={classes.All}>
                <p>All</p>
                <p>Debit</p>
                <p>Credit</p>
              </div>
              <div className={classes.days}>
                <img src={calendar} alt="calendar"/>
                <select>
                  <option>Past 30 Days</option>
                  <option>Past 14 Days</option>
                  <option>Past 7 Days</option>
                </select>
              </div>
              </div>
              <div className={classes.progress}></div>
              <div className={classes.total}>
                <p><IoIosSquare /> Total In (₦): +42,000</p>
                <p> Total Out (₦): -42,000 <IoIosSquare /></p>
              </div>

              <section>
                 <h6>Today</h6>
                 <div className={classes.list}>
                  <hr className={classes.todayrule}></hr>
                  <div className={classes.todaylist}>
                  {todayList.map((item) => (
                      <ListItem
                      key={item.id}
                      text={item.text} 
                      brand={item.brand} 
                      amounts={item.amounts} 
                      icons={item.icons} 
                      />
                  ))}
                  </div>
                 </div>
            </section>

            <section>
                 <h6  className={classes.sept}>Sept 18</h6>
                 <div className={classes.list}>
                  <hr className={classes.septrule}></hr>
                  <div className={classes.todaylist}>
                  {septList.map((item) => (
                      <ListItem
                      key={item.id}
                      text={item.text} 
                      brand={item.brand} 
                      amounts={item.amounts} 
                      icons={item.icons} 
                      />
                  ))}
                  </div>
                 </div>
            </section>
            <button>View All Transactions</button>
        </div>

        <hr className={classes.mid}></hr>

          {/* The right side of the dashboard content */}
        <div className={classes.content_right}>
        <p className={classes.recent}>Quick Actions</p>

        <div className={classes.quickactions}>
                <div className={classes.actions}> <img src={mkobo} alt="mkobo" /> <h5>Send Money</h5></div>
                <div className={classes.actions}> <img src={fundAcc_icon} alt="fundAcc_icon" /> <h5>Send Money</h5></div>
                <div className={classes.actions}> <img src={phone_icon} alt="phone_icon" /> <h5>Send Money</h5></div>
                <div className={classes.actions}> <img src={bills_icon} alt="bills_icon" /> <h5>Send Money</h5></div>
                <div className={classes.actions}> <img src={save_icon} alt="save_icon" /> <h5>Send Money</h5></div>
                <div className={classes.actions}> <img src={cashback_icon} alt="cashback_icon" /> <h5>Send Money</h5></div>
        </div>

        <div className={classes.upgrade}>
          <div><h4>Upgrade your account</h4> <p>Upgrade your account to increase your account limits.</p></div>
          <IoIosArrowForward className={classes.forward}/>
        </div>
        </div>
      </div>


      
    </div>
  )
}

export default Dashboard