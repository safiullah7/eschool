import React from "react";
import BoxForm from "../../components/Form/BoxForm";
import { Formik } from "formik";
import TitleForm from "../../components/Form/TitleForm";
import PasswordInput from "../../components/Form/PasswordInput";
import Wrapper from "../../components/Form/Wrapper";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

interface Values {
  password: string;
  repeatPassword: string;
}

function ResetPassword() {
  const { t } = useTranslation(["Reset"]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const ResetSchema = Yup.object().shape({
    password: Yup.string()
      .min(7, t("tooShort"))
      .max(50, t("tooLong"))
      .required(t("required")),
    repeatPassword: Yup.string()
      .required(t("required"))
      .oneOf([Yup.ref("password"), null], t("Passwords must match")),
  });

  return (
    <BoxForm>
      <Formik<Values>
        initialValues={{ password: "", repeatPassword: "" }}
        validationSchema={ResetSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, values, errors, touched, handleChange }) => (
          <form onSubmit={handleSubmit} style={{ paddingTop: "30px" }}>
            <TitleForm title={t("title")} />
            <Typography>{t("subTitle")}</Typography>
            <PasswordInput
              name="password"
              label={t("password")}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              value={values.password}
            />
            <p className="red">
              {errors.password && touched.password && errors.password}
            </p>
            <PasswordInput
              name="repeatPassword"
              label={t("repeatPassword")}
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              value={values.repeatPassword}
            />
            <p className="red">
              {errors.repeatPassword &&
                touched.repeatPassword &&
                errors.repeatPassword}
            </p>
            <button type="submit" className="button">
              {t("changeAccount")}
            </button>
          </form>
        )}
      </Formik>
    </BoxForm>
  );
}

export default ResetPassword;
