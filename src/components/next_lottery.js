import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import getOverview from "../../service/overview.service";

const NextLottery = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const response = getOverview;
  //   response.then(function (data) {
  //     setData(data);
  //   });
  // }, []);

  return (
    <div className={styles.winnerBgImage}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 200,
        }}
      >
        <p className={styles.textStyle}>
          {/* {data.description}/ */}
          {/* 2-р үеийн тохирол 2022/07/18-нд <br /> Номин Фүүдс facebook хуудсаар */}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          {/* <img src="/super.jpg" width={700} style={{ marginRight: "300px" }} /> */}
          {/* <Image src="/prize.png" width={700} height={500} alt="prize img" /> */}
        </div>
      </div>
    </div>
  );
};

export default NextLottery;
