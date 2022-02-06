import { Card } from "react-bootstrap";
import classes from "./ScheduleBox.module.css";

const ScheduleBox = ({ item, serial }) => {
  return (
    <Card className={classes.wrapper}>
      <div className={classes.box}>
        <p>{serial}</p>
        <p>
          {new Date(item.startTime).toLocaleTimeString('en-GB')}
        </p>
        <p>{item.text}</p>
      </div>
    </Card>
  );
};

export default ScheduleBox;
