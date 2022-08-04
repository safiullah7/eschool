import * as React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import TitleForm from "./TitleForm";
import HelperLink from "./HelperLink";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

interface Values {
  email: string;
  password: string;
}

function Login({ change }: any) {
  const { t } = useTranslation(["Login"]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email(t("invalid")).required(t("required")),
    password: Yup.string()
      .min(7, t("tooShort"))
      .max(50, t("tooLong"))
      .required(t("required")),
  });

  return (
    <>
      <Formik<Values>
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, values, errors, touched, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TitleForm title={t("title")} />
            <TextField
              label={t("email")}
              fullWidth
              size="small"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <p className="red">
              {errors.email && touched.email && errors.email}
            </p>
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
            <Link to="/forget">
              <p
                style={{
                  textAlign: "right",
                  color: "#7A7A7A",
                  fontSize: "14px",
                  paddingTop: "5px",
                }}
              >
                {t("forget")}
              </p>
            </Link>
            <button type="submit" className="button">
              {t("login")}
            </button>
            <HelperLink
              change={change}
              text={t("notAccount")}
              linkText={t("signUp")}
              tabNum="2"
            />
          </form>
        )}
      </Formik>
    </>
  );
}

export default Login;
