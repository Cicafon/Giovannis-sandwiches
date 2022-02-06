import Navigation from './Navigation';
import classes from './MainLayout.module.css';

function MainLayout(props) {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default MainLayout;
