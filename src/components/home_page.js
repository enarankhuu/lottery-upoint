import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useEffect } from "react";
// import getAvailableList from "../service/overview.service";

export default function HomePage() {
  // useEffect(() => {
  //   const res = getAvailableList();

  //   console.log(res, "response");
  // }, []);
  return (
    <div className={styles.bgImage}>
      <Link href="/winner_page">
        <div className={styles.startTextContainer}>
          <p className={styles.startText}>ЭХЛЭХ</p>
        </div>
      </Link>
    </div>
  );
}
