import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const WinnerPage = () => {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.winnerBgImage}>
      <div
        style={{
          display: "flex",
          justifyContent: timer ? "center" : "space - evenly",
          padding: "200px ",
          // justifyContent: "center",
        }}
      >
        <div>
          <Image src="/nusco-high.png" width={500} height={300} alt="50k" />
        </div>
      </div>
    </div>
  );
};

export default WinnerPage;
