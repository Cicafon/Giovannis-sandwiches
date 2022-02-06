import { Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/new-order");
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Giovanni's</h1>
      <h2>Feeling hungry?</h2>
      <Button onClick={onClick}>Order a sandwich</Button>
    </div>
  );
};

export default Home;
