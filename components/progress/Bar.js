import classes from "./Bar.module.css";

const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className={classes.bar}
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};

export default Bar;
