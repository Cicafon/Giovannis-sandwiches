import classes from "./Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const goToHomePage = () => {
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={goToHomePage}>
        Giovanni's
      </div>
      <nav>
        <ul>
          <li
            className={router.pathname === "/new-order" ? classes.active : ""}
          >
            <Link href="/new-order">Add New Order</Link>
          </li>
          <li className={router.pathname === "/schedule" ? classes.active : ""}>
            <Link href="/schedule">Order Schedule</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
