import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(["Home"]);
  console.log(t);
  return (
    <div className="container">
      <div style={{ padding: "40px 0px" }}>
        <h1 className="text-center">{t("home")}</h1>
      </div>
    </div>
  );
}

export default Home;
