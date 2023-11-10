import styles from "@/components/ui/NavBar.module.css";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className={styles["nav-container"]}>
      <div className={styles.left}> BLOG-X</div>
      <div className={styles.middle}> THIS IS MID AREA</div>
      <div className={styles.right}>
        <Button> Sign IN</Button>
      </div>
    </nav>
  );
}
