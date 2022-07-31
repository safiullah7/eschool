import React from 'react'
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(["Home"]);
  console.log(t)
  return (
    <div>
      <h1 className="text-center">{t("home")}</h1>
    </div>
  )
}

export default Home